import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
} from "./style";

function ProductCard({ product }) {
  return (
    <Link to={"/product/" + product.id}>
      <CardContainer>
        <ProductImage
          src={
            "https://api.store.vivo.com.br/medias/515Wx515H-DGAP17563000-1-.jpg?context=bWFzdGVyfGF6dXJlaW1hZ2VzfDEzMTkxfGltYWdlL2pwZWd8YURNeUwyZ3pPQzg0T1RnMk56YzROell6TWprMEx6VXhOVmQ0TlRFMVNGOUVSMEZRTVRjMU5qTXdNREJmSUNneEtTNXFjR2N8YzkwZjU3ZmRiOGFhMjcyYThhMWMxYTk0ZDM4YWVhMjg0NGRkYzUwNDlhN2E1MzM3NzVhNjFlNTg4MDE4YWIyZQ"
          }
        />
        <ProductDescription>{product.name}</ProductDescription>
        <ProductPrice>
          <span>R$ {product.price}</span>
          <p>Ou em até 10x de R$ {(product.price / 10).toFixed(2)}</p>
        </ProductPrice>
      </CardContainer>
    </Link>
  );
}

export default ProductCard;
