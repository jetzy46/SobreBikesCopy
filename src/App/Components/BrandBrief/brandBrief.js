import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function BrandBrief() {
  return (
    <MainContainer>
      <Steel>
        <SteelLink to="/steel-is-real">Steel is real</SteelLink>
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
          <LinkBlurry to="/la-marque">En savoir plus</LinkBlurry>
        </BlurryBgd>
      </History>
    </MainContainer>
  );
}

export default BrandBrief;

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
`;
const SteelLink = styled(Link)`
  font-size: 5em;
  text-shadow: 2px 2px black;
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
`;

const LinkBlurry = styled(Link)`
  font-size: 1.7em;
  font-weight: 700;
`;