import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 10;
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  background-color: #f0f0f0;
  font-size: 3rem;
  color: #660099;

  svg {
    width: 100%;
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// export const ModalWrapper = styled.div`
//   height: 40vh;
//   width: 80%;
//   font-size: 2rem;
//   color: #660099;
//   background-color: blue;

//   svg {
//     animation: rotate 2s linear infinite;
//   }

//   @keyframes rotate {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;
