import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: #dddddd;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 55%;
  margin-left: 5%;
  background-color: #fff;
  padding: 20px;

  h3 {
    font-weight: 600 !important;
    font-size: 1.1rem;
  }

  h5 {
    margin: 20px 0;
  }

  p {
    margin: 20px 0;
  }

  h1 {
    font-size: 1.5rem;
    margin: 25px 0;
  }
`;

export const RightContainer = styled.div`
  padding: 40px;
  width: 40%;
  h1 {
    font-size: 1.5rem;
  }
`;

export const AddressContainer = styled.div`
  width: 80%;
  border: 1.2px solid #6a0dad;
  border-radius: 2px;
  padding: 20px;

  input[type="radio"]::before {
    background-color: #6a0dad;
  }

  input {
    background-color: #6a0dad;
  }

  label {
    font-weight: 400 !important;
    margin-left: 20px;
  }

  p {
    margin-left: 40px;
    font-size: 0.9rem;
    line-height: 20px;
  }
`;

export const MyProductsCard = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;

  h3 {
    font-size: 1.1rem;
    font-weight: 600 !important;
  }
`;

export const ProductLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  img {
    width: 10%;
  }

  p {
    font-size: 0.8rem;
    line-height: 20px;
    min-width: 20%;
  }
`;

export const DeliveryContainer = styled.div`
  margin: 10px 0;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  padding: 20px 0;

  div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  label {
    margin-left: 10px;
    font-size: 0.8rem;
  }

  section {
    display: flex;
    align-items: center;
  }

  span {
    color: green;
  }
`;
