import React from "react";
import { ReactComponent as Vivinho } from "../../assets/svg/marca/vivinho.svg";
import { HeaderContainer } from "./style";

function Header() {
  return (
    <HeaderContainer>
      <Vivinho style={{ fill: "#fafafa" }} />
    </HeaderContainer>
  );
}

export default Header;
