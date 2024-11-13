import React from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HeaderContainer, IconsWrapper, Logo, LogoWrapper } from "./style";

function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoWrapper>
          <Link to="/">
            {" "}
            <Logo src="https://api.store.vivo.com.br/medias/Vivo-Vivinho-RGB-H-2020V1.png?context=bWFzdGVyfHJvb3R8MTM1Njh8aW1hZ2UvcG5nfGFEY3dMMmcyWlM4NE9UTTNNekl6T0RnNE5qY3dMMVpwZG04clZtbDJhVzVvYjE5U1IwSmZTRjh5TURJd1ZqRXVjRzVufDZjMzJlYTNhMGU1NjgyYTIxZDU0ZDVlZWQ3N2U3ZGY4MjY5NjdjN2NjNDdmYjg0NGY2MjE3MTFmYTE2MTQ3YzI" />
          </Link>
        </LogoWrapper>
        <IconsWrapper>
          <CiSearch />
          <CiUser />
          <CiShoppingCart />
        </IconsWrapper>
      </HeaderContainer>
    </>
  );
}

export default Header;
