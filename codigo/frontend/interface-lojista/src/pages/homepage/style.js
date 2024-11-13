import styled from "styled-components";

export const HomeContainer = styled.div`
  font-family: "Inter", system-ui;

  justify-content: center;
  background-color: #f0f0f0;
  height: 100vh;

  overflow: hidden;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: 30px;
  justify-content: space-evenly;

  @media (max-width:768px) {
    display: inline;
    margin-left: auto;
  }
`;

export const InfoUserContainer = styled.div`
  font-size: 3.5rem;
  margin: 30px 0;
  padding: 0 80px;
  line-height: 50px;

  svg {
    color: #660099;
    margin-right: 10px;
    font-size: 50px;
  }

  span {
    font-weight: 600;
    color: #660099;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 30px 0;
    padding: 0 20px;
    line-height: 35px;
  }
`;

export const UserNameWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-left: 0px;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;