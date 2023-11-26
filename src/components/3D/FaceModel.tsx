import { FC, useRef, useEffect } from "react";
import * as THREE from "three";
import {
  BatchedMesh,
  GLTFLoader,
  OrbitControls,
} from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

const MAX_MODEL_COUNT = 30;

const ThreeJSComponent: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let camera: THREE.PerspectiveCamera;
    let controls: OrbitControls;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let stats: Stats;
    let mesh: THREE.Group | BatchedMesh;
    const ids: number[] = [];

    const position = new THREE.Vector3();
    const rotation = new THREE.Euler();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();

    const randomizeMatrix = (matrix: THREE.Matrix4) => {
      do {
        position.x = Math.random() * 100 - 50;
        position.y = Math.random() * 100 - 50;
        position.z = Math.random() * 100 - 50;
      } while (
        Math.abs(position.x) <= 6 ||
        Math.abs(position.y) <= 6 ||
        Math.abs(position.z) <= 6
      );

      rotation.x = Math.random() * 2 + Math.PI;
      rotation.y = Math.random() * 2 + Math.PI;
      rotation.z = Math.random() * 2 + Math.PI;

      quaternion.setFromEuler(rotation);

      scale.x = scale.y = scale.z = 6;

      return matrix.compose(position, quaternion, scale);
    };

    const randomizeRotationSpeed = (rotation: THREE.Euler) => {
      rotation.x = Math.random() * 0.01;
      rotation.y = Math.random() * 0.01;
      rotation.z = Math.random() * 0.01;
      return rotation;
    };

    const createMaterial = () =>
      new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shininess: 20,
      });

    const cleanup = () => {
      if (mesh) {
        scene.remove(mesh);

        if ((mesh as BatchedMesh).dispose) {
          (mesh as BatchedMesh).dispose();
        }
      }
    };

    const initLight = () => {
      const pointLight = new THREE.PointLight(0xf4f6f8, 900);
      pointLight.position.x = Math.sin(Date.now() * 0.1);
      pointLight.position.y = Math.cos(Date.now() * 0.1);
      pointLight.distance = 900;
      scene.add(pointLight);

      backPointLight.position.copy(camera.position);
      scene.add(backPointLight);
    };

    const initMesh = () => {
      cleanup();
      initBatchedMesh();
    };

    const modelUrl = "/src/assets/lovly_face.glb";

    function loadAndAddModel() {
      const loader = new GLTFLoader();
      const mesh = new THREE.Group();

      loader.load(modelUrl, (gltf) => {
        const mainModelChild = gltf.scene.children[0].children[0];
        const subModelChild = gltf.scene.children[0].children[1];

        const mainGeometry = (mainModelChild as THREE.Mesh).geometry;
        const subGeometry = (subModelChild as THREE.Mesh).geometry;

        for (let i = 0; i < MAX_MODEL_COUNT; i++) {
          const mainMaterial = new THREE.MeshPhongMaterial({
            color: 0xffc92c,
            shininess: 20,
          });
          const subMaterial = new THREE.MeshPhongMaterial({
            color: 0xff4949,
            shininess: 20,
          });

          const mainMesh = new THREE.Mesh(mainGeometry, mainMaterial);
          const subMesh = new THREE.Mesh(subGeometry, subMaterial);

          mainMesh.position.set(0, 0, 0);
          subMesh.position.copy(mainMesh.position);

          randomizeMatrix(mainMesh.matrix);
          mainMesh.matrix.decompose(
            mainMesh.position,
            mainMesh.quaternion,
            mainMesh.scale
          );

          subMesh.matrix.copy(mainMesh.matrix);
          subMesh.matrix.decompose(
            subMesh.position,
            subMesh.quaternion,
            subMesh.scale
          );

          mainMesh.userData.rotationSpeed = randomizeRotationSpeed(
            new THREE.Euler()
          );
          subMesh.userData.rotationSpeed = randomizeRotationSpeed(
            new THREE.Euler()
          );

          mesh.add(mainMesh);
          mesh.add(subMesh);
        }

        scene.add(mesh);
      });
    }

    const initBatchedMesh = () => {
      const geometryCount = MAX_MODEL_COUNT;
      const vertexCount = MAX_MODEL_COUNT * 512;
      const indexCount = MAX_MODEL_COUNT * 1024;

      const euler = new THREE.Euler();
      mesh = new BatchedMesh(
        geometryCount,
        vertexCount,
        indexCount,
        createMaterial()
      );
      (mesh as BatchedMesh).userData.rotationSpeeds = [];
      ids.length = 0;

      for (let i = 0; i < MAX_MODEL_COUNT; i++) {
        const rotationMatrix = new THREE.Matrix4();
        rotationMatrix.makeRotationFromEuler(randomizeRotationSpeed(euler));
        (mesh as BatchedMesh).userData.rotationSpeeds.push(rotationMatrix);

        ids.push(i);
      }

      scene.add(mesh as BatchedMesh);
    };

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera = new THREE.PerspectiveCamera(70, width / height, 1, 100);
      camera.position.z = 66;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0c0c0c);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.0;

      stats = new Stats();
      document.body.appendChild(stats.dom);

      window.addEventListener("resize", onWindowResize);

      if (containerRef.current && !containerRef.current.hasChildNodes()) {
        containerRef.current?.appendChild(renderer.domElement);
      }
    };

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();
      stats.update();
      backPointLight.position.copy(camera.position);

      renderScene();
    };

    const backPointLight = new THREE.PointLight(0xf4f6f8, 1600);

    init();
    initLight();
    initMesh();
    loadAndAddModel();
    animate();

    return () => {
      cleanup();
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default ThreeJSComponent;
