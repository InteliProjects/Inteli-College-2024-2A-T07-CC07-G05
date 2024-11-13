import React, { useState } from "react";
import "../../assets/images/smartphone-placeholder.jpg";
import {
  Counter,
  Feedback,
  ProductCardContainer,
  ProductImageContainer,
  SendButton,
} from "./style";

function ActionProductCard(props) {
  const [amount, setAmount] = useState(1);
  const [sent, setSent] = useState(false);

  return (
    <>
      {" "}
      <ProductCardContainer>
        <ProductImageContainer>
          <img src="https://api.store.vivo.com.br/medias/515Wx515H-TGSA529B-samsung-galaxy-A55-azul-marinho-frente-e-verso-13-.jpg?context=bWFzdGVyfHByb2R1Y3RpbWFnZXN8MzQ0OTB8aW1hZ2UvanBlZ3xhRFE1TDJnd1pDODVNVFU1TmpBeE16VTJPRE13THpVeE5WZDROVEUxU0Y5VVIxTkJOVEk1UWw5ellXMXpkVzVuTFdkaGJHRjRlUzFCTlRVdFlYcDFiQzF0WVhKcGJtaHZMV1p5Wlc1MFpTMWxMWFpsY25Odlh5QW9NVE1wTG1wd1p3fDBjNWYzMmMxODQ0MmVkOTZkNGViNjA1Njc2Y2EzZGIzZmEyOTAwZTA1YjA1MTM2YTZlNmQxYTI0MTY4Njk2YjM" />
          <p>
            Smartphone Samsung Galaxy A55 256GB Azul Marinho 5G 8GB RAM Tela
            6,6" Câm. Traseira 50+12+5MP Frontal 32MP
          </p>
        </ProductImageContainer>
        <Counter>
          <span>{props.text}</span>
          <div>
            <button onClick={() => setAmount(amount - 1)}>-</button>
            <span>{amount}</span>
            <button onClick={() => setAmount(amount + 1)}>+</button>
          </div>
        </Counter>
        <SendButton onClick={() => setSent(true)}>Confirmar</SendButton>
      </ProductCardContainer>
      {sent ? <Feedback>{props.button}</Feedback> : null}
    </>
  );
}

export default ActionProductCard;
