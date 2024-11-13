import styled from "styled-components";

export const CardContainer = styled.div`
  color: #000;
  border: 1px solid #a6a4a6;
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(191, 191, 191, 1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(191, 191, 191, 1);
    box-shadow: 0px 0px 10px 0px rgba(191, 191, 191, 1);
  }

  a {
    text-decoration: none;
  }
`;

export const ProductImage = styled.img`
  max-height: 200px;
`;

export const ProductDescription = styled.p`
  width: 100%;
  border-top: 1px solid #a6a4a6;
  border-bottom: 1px solid #a6a4a6;
  padding: 5%;
`;

export const ProductPrice = styled.div`
  width: 100%;
  padding: 2% 5%;
  line-height: 25px;

  span {
    font-weight: 400;
    font-size: 1.2rem;
    width: 100%;
  }

  P {
    font-size: 0.7rem;
  }
`;
