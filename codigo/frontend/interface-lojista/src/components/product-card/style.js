import styled from "styled-components";

export const ProductCardContainer = styled.div`
  padding: 52px 10px;
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

export const ProductTable = styled.table`
  margin: 0 auto;
  width: 90%;
  font-size: 1.1rem;
  text-align: center;

  td {
    padding: 5px 0;
    border: 3px solid #660099;
  }
`;
