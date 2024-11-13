import React from "react";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Header from "../../components/header";
import { GetProductById } from "../../services/getProductById";
import {
  BuyProductContainer,
  Image,
  LeftContainer,
  PageContainer,
  PrimaryButton,
  ProductDescription,
  ProductPrice,
  RightContainer,
} from "./style";

function ProductPage() {
  const [currentProduct, setCurrentProduct] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await GetProductById(id)
        .then((response) => {
          setCurrentProduct(response.data);
          setIsLoaded(true);
        })
        .catch((error) => console.log("Deu ruim: ", error));
    })();
  }, []);

  return (
    <PageContainer>
      <Header />
      {isLoaded ? (
        <>
          <LeftContainer>
            <Image
              src={
                "https://api.store.vivo.com.br/medias/515Wx515H-DGAP17563000-1-.jpg?context=bWFzdGVyfGF6dXJlaW1hZ2VzfDEzMTkxfGltYWdlL2pwZWd8YURNeUwyZ3pPQzg0T1RnMk56YzROell6TWprMEx6VXhOVmQ0TlRFMVNGOUVSMEZRTVRjMU5qTXdNREJmSUNneEtTNXFjR2N8YzkwZjU3ZmRiOGFhMjcyYThhMWMxYTk0ZDM4YWVhMjg0NGRkYzUwNDlhN2E1MzM3NzVhNjFlNTg4MDE4YWIyZQ"
              }
            />
          </LeftContainer>
          <RightContainer>
            <ProductDescription>{currentProduct.name}</ProductDescription>
            <p>
              Tem um plano pós Vivo? <span>Acesse</span> seu cadastro e{" "}
              <span>confira o preço especial</span> para o seu plano
            </p>
            <BuyProductContainer>
              <ProductPrice>
                <span>R$ {currentProduct.price}</span>
                <p>
                  Ou em até 10x de R$ {(currentProduct.price / 10).toFixed(2)}
                </p>
              </ProductPrice>
              <Link to={"/cart/" + id}>
                <PrimaryButton>Comprar</PrimaryButton>
              </Link>
            </BuyProductContainer>
          </RightContainer>
        </>
      ) : null}
    </PageContainer>
  );
}

export default ProductPage;
