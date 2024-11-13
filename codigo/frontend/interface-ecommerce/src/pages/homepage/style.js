import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  a {
    margin: 0 5px 30px 0;
    width: 20%;
    text-decoration: none;
  }
`;

export const ProductCardsContainer = styled.div`
  border-top: 0.5px solid #ddd;
  margin: 0 auto;
  padding-top: 50px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PageTitle = styled.h1`
  padding: 2%;
  font-size: 40px;
  font-weight: 300;
`;
