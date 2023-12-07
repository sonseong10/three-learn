import { styled } from "styled-components";
import LoadingImage from "../../assets/loading.svg";

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background-color: transparent;
  transform: translate3d(-50%, -50%, 0);

  span {
    color: #f4f6f8;
    text-align: center;
  }
`;

const LodingAnimation = styled.div`
  width: 280px;
  height: 280px;
  background: url(${LoadingImage}) no-repeat center center;
  background-size: 260px;
`;

function Loading(): JSX.Element {
  return (
    <LoadingWrapper>
      <LodingAnimation aria-hidden></LodingAnimation>
      <span>마우스로 드래그 해보세요</span>
    </LoadingWrapper>
  );
}

export default Loading;
