import styled from "styled-components";

export const PageTitle = styled.h1`
  width: 100%;
  font-family: "Inter", system-ui;
  color: #f0f0f0;
  font-size: 2.5em;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10%;
`;

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #660099;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PageContent = styled.div`
  width: 100%;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10%;

  svg {
    max-height: 30vh;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  fill: "red";

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  button {
    display: block;
    padding: 10px;
    background-color: #bd4aff;
    border: 0;
    font-size: 1.2em;
    border-radius: 5px;
    color: #fff;
    width: 100%;
    margin: 1% 20%;
  }
`;
