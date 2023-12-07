import { Suspense } from "react";
import ThreeJSComponent from "./components/3D/FaceModel";
import styled from "styled-components";
import LogoImage from "./assets/logo.svg";
import Loading from "./components/ui/Loading";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: transparent;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1140px;

    ul {
      display: flex;
      list-style: none;
      padding-left: 0;

      li {
        a {
          color: #fff;
          text-decoration: none;
        }

        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
`;

const Logo = styled.div`
  width: 140px;
  height: 20px;
  background: url(${LogoImage}) no-repeat center center;
  background-size: 120px;
`;

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate3d(-50%, -10%, 0);

  button {
    padding: 22px 32px;
    font-size: 22px;
    border-radius: 9999px;
    font-weight: 700;
    border: none;
    outline: 0px;
    background-color: white;
    color: #191f28;
    transition: background-color 0.1s ease 0s;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
`;

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <div>
        <Logo></Logo>
        <div>
          <ul>
            <li>
              <a href={"#"} aria-label="'3D로 체험하기'로 이동하기">
                3D로 체험하기
              </a>
            </li>
            <li>
              <a href={"#"} aria-label="'나만에 이모지만들기'로 이동하기">
                나만에 이모지만들기
              </a>
            </li>
            <li>
              <a href={"#"} aria-label="'전체보기'로 이동하기">
                전체보기
              </a>
            </li>
            <li>
              <a href={"#"} aria-label="'저작권안내'로 이동하기">
                저작권안내
              </a>
            </li>
            <li>
              <a href={"#"} aria-label="'다운로드'로 이동하기">
                다운로드
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
}

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <button onClick={void 0}>토스페이스 알아보기</button>
    </FooterWrapper>
  );
}

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <ThreeJSComponent />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
