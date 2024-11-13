import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: "Inter", system-ui;
  justify-content: center;
  background-color: #f0f0f0;
  height: 100vh;

  overflow: hidden;
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: 800;
  font-size: 1.4rem;
  color: #660099;
  text-align: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  color: #660099;
  align-items: center;
  margin: 30px auto;
  font-size: 40px;
  font-family: "Inter", system-ui;
  display: flex;
  padding: 0px 18px;
  border: 3px solid #660099;
  border-radius: 13px;
`;

export const InputLabel = styled.p`
  font-family: "Inter", system-ui;
  text-align: center;
  font-size: 40px;
  margin-top: 70px;
`;