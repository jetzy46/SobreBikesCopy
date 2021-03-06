import React from "react";
import { MainContainer, Header, Footer } from "../../index";
import styled from "styled-components";

function Sellers() {
  document.title = "Trouver un revendeur - Sobre Bikes";
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <h2>Trouver un revendeur</h2>
        <h4>La carte des revendeurs Sobre Bikes</h4>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <GMap src="https://www.google.com/maps/d/embed?mid=13Lnz_gi8jBcJFSm-rkZMkJNA3aQ&ehbc=2E312F"></GMap>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
}

export default Sellers;

const ContentContainer = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 899px) and (orientation: landscape) {
    height: 150vh;
  }
  > h2 {
    font-size: 2.5em;
    margin-bottom: 0;
    text-align: center;
  }
`;

const GMap = styled.iframe`
  width: 100%;
  height: 80%;
  border: none;
  border-radius: 1em;
`;
