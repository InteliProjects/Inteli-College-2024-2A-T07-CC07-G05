import styled from "styled-components";

export const ProductCardContainer = styled.div`
  padding: 30px 10px;
  width: 80%;
  border: 3px solid #660099;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  img {
    margin-right: 10px;
    max-width: 30%;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding: 0 10px;
  }

  button {
    font-size: 1.5rem;
  }
`;

export const SendButton = styled.div`
  background-color: #660099;
  border-radius: 15px;
  width: 90%;
  color: #f0f0f0;
  text-align: center;
  font-size: 1.3rem;
  padding: 10px 0;
  margin: 0 auto;
  margin-top: 25px;
`;

export const Feedback = styled.div`
  padding: 10px 10px;
  text-align: center;
  width: 80%;
  border: 3px solid #82d400;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
`;
