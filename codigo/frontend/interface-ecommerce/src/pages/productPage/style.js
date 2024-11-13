import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  width: 60%;
  height: 300px;
  padding: 30px 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  P {
    font-size: 0.8rem;

    span {
      font-weight: 600 !important;
    }
  }
`;

export const Image = styled.img`
  max-height: 70vh;
`;

export const ProductDescription = styled.h1`
  font-weight: 300;
  font-size: 1.7rem;
  margin-bottom: 30px;
`;

export const BuyProductContainer = styled.div`
  padding: 4%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #a6a4a6;
  border-radius: 2px;
  width: 100%;
  height: 100px;
`;

export const ProductPrice = styled.div`
  line-height: 25px;

  span {
    font-weight: 400;
    font-size: 1.5rem;
    width: 100%;
  }

  P {
    font-size: 0.7rem;
  }
`;

export const PrimaryButton = styled.button`
  font-family: "Roboto", sans-serif;
  border: 0;
  background-color: #cb2166;
  color: #ffffff;
  box-sizing: border-box;
  padding: 10px 50px;
  border-radius: 2px;
  cursor: pointer;
`;
