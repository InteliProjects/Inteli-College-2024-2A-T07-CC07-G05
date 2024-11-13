import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import ProductCard from "../../components/ProductCard";
//import { products } from "../../constants/products";
import { GetAllProducts } from "../../services/getAllProducts";
import { PageContainer, PageTitle, ProductCardsContainer } from "./style";

function Homepage() {
  const [ecommerceProducts, setEcommerceProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await GetAllProducts()
        .then((response) => setEcommerceProducts(response.data.body.slice(1)))
        .catch((error) => console.log("Deu ruim: ", error));
    })();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, [ecommerceProducts]);

  return (
    <PageContainer>
      <Header />
      <PageTitle>Celular</PageTitle>
      {isLoaded ? (
        <ProductCardsContainer>
          {ecommerceProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </ProductCardsContainer>
      ) : null}
    </PageContainer>
  );
}

export default Homepage;
