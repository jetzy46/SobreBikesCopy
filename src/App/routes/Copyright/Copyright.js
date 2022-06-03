import React from "react";
import styled from "styled-components";
import { Header, Footer, MainContainer } from "../../index";

function Copyright() {
  document.title = "Politique de confidentialité - Sobre Bikes";
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Title>copyright</Title>
        <TextContainer>
          <p>
            Le but de ce projet est/était de m'entrainer à refaire un site,et utiliser le plus de compétences possible
            sans rentrer dans un "projet usine à gaz" qui serai immense.
            <br />
            Je ne possède en aucun les assets de ce site, appartenant tous à leur ayant droit, Sobre Bikes™.
            <br />
            Le site n'a pas pour but d'être distribué et/ou utlisé à des fins autre que démonstratives, de ce que je
            suis capable de faire.
          </p>
          <a href="http://www.sobre-bikes.fr/politique-de-confidentialite/">Redirection vers leurs copyrights</a>
          <h6>Johan L</h6>
        </TextContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
}

export default Copyright;

const ContentContainer = styled.div`
  width: 90%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 2.5em;
  margin: 0.8em 0;
  text-transform: capitalize;
`;
const TextContainer = styled.div`
  font-size: 1.5em;
  color: lightgrey;
  @media only screen and (max-width: 899px) {
    font-size: 1.1em;
  }
  > a:hover {
    text-decoration: underline;
  }

  > h6 {
    margin: 1.2em 0;
    text-transform: capitalize;
    font-size: 1.2em;
  }
`;
