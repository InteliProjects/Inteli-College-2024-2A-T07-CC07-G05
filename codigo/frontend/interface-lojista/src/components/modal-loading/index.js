import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { ModalContainer } from "./style";

function LoadingModal() {
  return (
    <ModalContainer>
      <AiOutlineLoading />
      {/* <ModalWrapper></ModalWrapper> */}
    </ModalContainer>
  );
}

export default LoadingModal;
