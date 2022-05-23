import React from "react";
import styled from "styled-components";
import { Header, Footer, MainContainer } from "../../index";

function Brand() {
  document.title = "Histoire de la marque - Sobre Bikes";
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Title>la marque</Title>
        <TextContainer>
          <h6>le mot du fondateur</h6>
          <p>
            Fin des années 80, arrivent en France les premiers modèles de cycles dédiés à la pratique tout terrain, le
            phénomène VTT est né !<br />
            De la compétition à la pratique loisir, tout le monde s’en empare à son niveau. L’engouement est tel que la
            presse se spécialise, les premiers magazines entièrement dédiés au VTT naissent. Chaque mois, au fil des
            pages, les lecteurs peuvent suivre l’actualité de ce nouveau sport !<br />
            C’est au travers de ces lectures que ma passion est née ! Je passe du rêve à la réalité en Juin 1990 par
            l’achat de mon premier VTT, un Giant Hurricane, le premier d’une longue liste …<br />
            Cette nouvelle passion ne se limite pas à la pratique, elle prend en compte une forte dimension technique et
            mécanique. Toujours en quête de la meilleure efficacité terrain et du meilleur rapport qualité/prix, mes
            choix ont été guidés par la question suivante :<br />
            <i>« Est-ce que le plaisir est proportionnel à la somme dépensée ? »</i>
            <br />
            Combien de vélos ai-je imaginés et schématisés avant de faire le grand saut ! De mes réflexions, couplées à
            celles d’Éric, alors mon associé, naît l’esprit Sobre Bikes en Juin 2008.
            <br />
            Depuis, la marque et sa fidélité à l’acier perdure, tout comme ma passion !<br />
            Grâce à vous tous, Sobristes, followers, revendeurs, partenaires et journalistes, cette passion m’anime
            chaque jour et pour cela un grand MERCI !<br />
            Laurent.
          </p>
        </TextContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
}

export default Brand;

const ContentContainer = styled.div`
  width: 90%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextContainer = styled.div`
  font-size: 1.5em;
  color: lightgrey;
  > h6 {
    margin: 0;
    text-transform: capitalize;
    font-size: 1.2em;
  }
`;

const Title = styled.h3`
  font-size: 2.5em;
  margin: 0.8em 0;
  text-transform: capitalize;
`;
