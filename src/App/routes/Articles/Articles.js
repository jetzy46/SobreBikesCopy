import React from "react";
import styled from "styled-components";
import { Header, Footer, Card, MainContainer } from "../../index";
import articleData from "./data";

function Articles() {
  document.title = "Articles - Sobre Bikes";
  return (
    <MainContainer>
      <Header />
      <CardsContainer>
        {articleData.map((article) => (
          <Card
            key={article.articleId}
            thumbnail={article.thumbnail}
            title={article.title}
            description={article.description}
            link={article.link}
            publishedDate={article.publishedDate}
            author={article.author}
          />
        ))}
      </CardsContainer>
      <Footer />
    </MainContainer>
  );
}

export default Articles;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  padding: 2em;
`;
