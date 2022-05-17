import React from "react";
import styled from "styled-components";

function Brand() {
  return (
    <MainContainer>
      <Steel>
        <a href="/">Steel is real</a>
      </Steel>
      <History>
        <BlurryBgd>
          <p>
            La marque Sobre
            <br />
            Née dans le beaujolais, l'entreprise Sobre Bikes a vue le jour en 2008 avec pour objectif de redonner ses
            titres de noblesses <br />
            aux cadres en acier...
          </p>
          <a href="/">En savoir plus</a>
        </BlurryBgd>
      </History>
    </MainContainer>
  );
}

export default Brand;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Steel = styled.div`
  width: 100%;
  height: 70%;
  background: url(${process.env.PUBLIC_URL + "img/steel.jpg"}) no-repeat center/100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
  > a {
    font-size: 5em;
    text-shadow: 2px 2px black;
  }
`;
const History = styled.div`
  width: 100%;
  height: 30%;
  background: url(${process.env.PUBLIC_URL + "img/vignes.jpg"}) no-repeat center/100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlurryBgd = styled.div`
  width: 70%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    text-align: center;
    font-size: 1.5em;
    font-weight: 500;
    margin-bottom: 2em;
  }
  > a {
    font-size: 1.7em;
    font-weight: 700;
  }
`;
