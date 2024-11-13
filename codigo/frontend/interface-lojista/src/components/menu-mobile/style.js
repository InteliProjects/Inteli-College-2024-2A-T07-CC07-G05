import styled from "styled-components";

export const Menu = styled.nav`
  width: 60px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #660099;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #f0f0f0;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: auto;
    left: 0;
    bottom: 0;
    height: 50px;
    background-color: #660099;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;

    a {
      text-decoration: none;
      color: #f0f0f0;
      margin: 10px 0;
    }
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: #f0f0f0;
  font-size: 30px;

  svg {
    padding-bottom: ${(props) => (props.ativado ? "3px" : "0")};
    border-bottom: ${(props) => (props.ativado ? "2px solid #f0f0f0" : "0")};
  }
`;
