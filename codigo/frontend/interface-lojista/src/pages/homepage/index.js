import React from "react";
import { MdLocationPin } from "react-icons/md";
import Header from "../../components/header";
import InfoCard from "../../components/info-card";
import MenuMobile from "../../components/menu-mobile";
import {
  CardsContainer,
  HomeContainer,
  InfoUserContainer,
  LocationContainer,
  UserNameWrapper,
} from "./style";

function HomePage() {
  const cards = [
    {
      label: "Produtos em estoque",
      value: "13.022",
    },
    {
      label: "Produtos vendidos este mês",
      value: "918",
    },
    {
      label: "Vendidos este mês",
      value: "R$ 320.271,49",
    },
  ];

  return (
    <HomeContainer>
      <Header />
      <InfoUserContainer>
        <UserNameWrapper>
          Olá, <span>Antônio</span>!
        </UserNameWrapper>
        <LocationContainer>
          <MdLocationPin size={60} />
          <p>
            Você está em <span>Iguatemi São Paulo II</span>
          </p>
        </LocationContainer>
      </InfoUserContainer>
      <CardsContainer>
        {cards.map((item, number) => {
          return (
            <InfoCard key={number} value={item.value} label={item.label} />
          );
        })}
      </CardsContainer>
      <MenuMobile selecionado={0} />
    </HomeContainer>
  );
}

export default HomePage;
