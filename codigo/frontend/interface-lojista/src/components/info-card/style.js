import styled from "styled-components";

export const CardContainer = styled.div`
  font-family: "Inter", system-ui;
  width: 25%;
  border: 3px solid #660099;
  border-radius: 10px;
  margin: 40px 25px 30px 25px;
  padding: 10px;

  span {
    font-weight: 800;
    color: #660099;
    width: 100%;
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-family: "Inter", system-ui;
    width: 80%;
    border: 3px solid #660099;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 10px;

    span {
      font-weight: 800;
      color: #660099;
      width: 100%;
      font-size: 3rem;
    }
  }
`;
