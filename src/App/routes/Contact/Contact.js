import React from "react";
import { MainContainer, Header, Footer } from "../../index";
import styled from "styled-components";

function Contact() {
  document.title = "Contact - Sobre Bikes";
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <h2>Contact</h2>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
}

export default Contact;

const ContentContainer = styled.div`
  width: 80%;
  height: 40vh;
  display: flex;
  justify-content: center;
  > h2 {
    font-size: 2.5em;
  }
`;
