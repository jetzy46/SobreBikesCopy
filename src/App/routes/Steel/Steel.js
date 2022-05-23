import React from "react";
import styled from "styled-components";
import { Header, Footer, MainContainer } from "../../index";

function Steel() {
  document.title = "Steel is real - Sobre Bikes";
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Title>Steel is real</Title>
        <TextContainer>
          <p>
            L’acier, matériau oublié ?<br />
            Oublié pour des raisons marketing, sans aucun doute !<br />
            Longtemps incontournable, il a progressivement laissé sa place à l’aluminium et au carbone. Malgré tout,
            l’acier est toujours resté présent dans la paysage vététiste et n’a jamais été abandonné par les
            manufacturiers tels que Reynolds, Tange , Columbus ou d’autres.
            <br />
            L’esprit « Sobre », c’est un attachement sincère à ce matériau pour deux raisons :
          </p>
          <ul>
            <Points>
              Ses qualités intrinsèques de souplesse, confort et nervosité, indispensables à la pratique tout-terrain
            </Points>
            <Points>Le charme intemporel de ses tubes et une certaine sobriété !</Points>
          </ul>
        </TextContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
}

export default Steel;

const ContentContainer = styled.div`
  width: 90%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextContainer = styled.div`
  font-size: 1.5em;
  color: lightgrey;
`;
const Title = styled.h3`
  font-size: 2.5em;
  margin: 0.8em 0;
`;
const Points = styled.li`
  list-style-type: disc;
`;
