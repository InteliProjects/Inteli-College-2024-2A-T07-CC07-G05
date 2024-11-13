import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import MenuMobile from "../../components/menu-mobile";
import ProductCard from "../../components/product-card";
import Scanner from "../../components/scanner";
import { PageContainer, Title, Input, InputLabel } from "./style";

function ConsultarEstoque() {
  const [detected, setDetected] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [sku, setSku] = useState("");

  const handleDetected = (code) => {
    setDetected(true);
    console.log(`Código de barras detectado: ${code}`);
  };

  const handleSkuChange = (event) => {
    setSku(event.target.value);
    setDetected(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageContainer>
      {/* <LoadingModal /> */}
      <Header />
      <Title>Consultar estoque</Title>
      {isDesktop ? (
        <>
        <InputLabel>Digite o SKU do produto:</InputLabel>
        <Input
          type="text"
          placeholder="SKU do produto"
          value={sku}
          onChange={handleSkuChange}
        />
        </>
      ) : (
        <Scanner onDetected={handleDetected} />
      )}
      {detected ? <ProductCard /> : null}
      <MenuMobile selecionado={2} />
    </PageContainer>
  );
}

export default ConsultarEstoque;
