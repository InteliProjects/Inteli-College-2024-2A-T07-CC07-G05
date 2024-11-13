import styled from "styled-components";

export const ScannerContainer = styled.section`
  width: 100%;
  height: 30vh;
  //background-color: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  video {
    width: 100%;
    max-height: 30vh;
  }
`;

export const ScannerWrapper = styled.div`
  width: 100%;

  video {
    width: 100%;
  }

  canvas {
    display: none;
  }
`;
