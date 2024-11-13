import React from "react";
import { FormInput } from "./style";

function Input(props) {
  return (
    <FormInput
      type={props.inputData.type}
      placeholder={props.inputData.placeholder}
    />
  );
}

export default Input;
