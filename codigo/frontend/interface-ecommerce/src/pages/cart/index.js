import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { GetProductById } from "../../services/getProductById";
import {
  AddressContainer,
  ContentContainer,
  DeliveryContainer,
  LeftContainer,
  MyProductsCard,
  PageContainer,
  ProductLine,
  RightContainer,
} from "./style";

function CartPage() {
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
      <ContentContainer>
        <LeftContainer>
          <h1>Olá, ANTÔNIO QUALABOA</h1>
          <p>Confira os endereços de entrega e cobrança da sua compra</p>
          <h3>Endereços de entrega</h3>
          <h5>
            Conferir informações e selecionar endereço em que esse pedido deve
            ser entregue
          </h5>
          <AddressContainer>
            <input type="radio" id={"Casa"} />
            <label for="Casa">Casa</label>
            <p>
              Rua da Felicidade, Nota 10 - Butantã <br />
              Complemento: Apto 1000A, Ponto De Referência: Inteli <br />
              CEP: 05510-021, S Paulo - São Paulo
            </p>
          </AddressContainer>
        </LeftContainer>
        {isLoaded ? (
          <RightContainer>
            <h1>Resumo do pedido</h1>
            <MyProductsCard>
              <h3>Meus produtos</h3>
              <ProductLine>
                <img
                  src={
                    "https://api.store.vivo.com.br/medias/515Wx515H-DGAP17563000-1-.jpg?context=bWFzdGVyfGF6dXJlaW1hZ2VzfDEzMTkxfGltYWdlL2pwZWd8YURNeUwyZ3pPQzg0T1RnMk56YzROell6TWprMEx6VXhOVmQ0TlRFMVNGOUVSMEZRTVRjMU5qTXdNREJmSUNneEtTNXFjR2N8YzkwZjU3ZmRiOGFhMjcyYThhMWMxYTk0ZDM4YWVhMjg0NGRkYzUwNDlhN2E1MzM3NzVhNjFlNTg4MDE4YWIyZQ"
                  }
                />
                <p>{currentProduct.name}</p>
                <p>
                  R$ {currentProduct.price}
                  <br />1 unidade
                </p>
              </ProductLine>
              <DeliveryContainer>
                <div>
                  <section>
                    <input type="radio" id={"gratis"} />
                    <label for="gratis">Entrega e 1 a 5 dias úteis</label>
                  </section>
                  <span>Grátis</span>
                </div>
                <div>
                  <section>
                    <input type="radio" id={"retire"} />
                    <label for="retire">Retire a partir de 2 horas</label>
                  </section>
                  <span>R$ 5,99</span>
                </div>
                <div>
                  <section>
                    <input type="radio" id={"full"} />
                    <label for="full">Entrega será realizada hoje</label>
                  </section>
                  <span>R$ 19,99</span>
                </div>
              </DeliveryContainer>
            </MyProductsCard>
          </RightContainer>
        ) : null}
      </ContentContainer>
    </PageContainer>
  );
}

export default CartPage;
