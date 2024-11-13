import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  border-bottom: 1px solid #ddd;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img`
  width: 10%;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 20px;
  }
`;
