import React from "react";
import styled from "styled-components";
import { Header, Footer, Card } from "../../index";
import articleData from "./data";

function Articles() {
  return (
    <MainContainer>
      <Header />
      {articleData.map((article) => (
        <Card
          key={article.id}
          thumbnail={article.thumbnail}
          title={article.title}
          description={article.description}
          link={article.link}
          publishedDate={article.publishedDate}
          author={article.author}
        />
      ))}
      <Footer />
    </MainContainer>
  );
}

export default Articles;

const MainContainer = styled.div``;
