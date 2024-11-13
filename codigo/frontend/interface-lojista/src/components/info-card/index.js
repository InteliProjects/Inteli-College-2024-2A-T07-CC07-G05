import React from "react";
import { CardContainer } from "./style";

function InfoCard(props) {
  return (
    <CardContainer>
      <span>{props.value}</span>
      <p>{props.label}</p>
    </CardContainer>
  );
}

export default InfoCard;
