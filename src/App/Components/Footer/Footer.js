import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <MainContainer>
      <Contact>Pour toute demande, merci d'utiliser l'adresse suivante: contactsobre@gmail.com</Contact>
      <Links>
        <ul>
          <LinkContainer>
            <a href="/">La marque</a>
          </LinkContainer>
          <LinkContainer>
            <a href="/">Revendeurs</a>
          </LinkContainer>
          <LinkContainer>
            <a href="/">Contact</a>
          </LinkContainer>
          <LinkContainer>
            <a href="/">Articles</a>
          </LinkContainer>
          <LinkContainer>
            <a href="/">Boutique</a>
          </LinkContainer>
          <LinkContainer>
            <a href="/">SOBRE Bikes - copyright 2022</a>
          </LinkContainer>
        </ul>
      </Links>
    </MainContainer>
  );
}

export default Footer;

const MainContainer = styled.div`
  width: 100%;
  height: 33vh;
`;
const Contact = styled.div`
  width: 100%;
  height: 30%;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Links = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  > ul {
    width: 90%;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
const LinkContainer = styled.li`
  width: 25%;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  > a {
    font-weight: 500;
    font-size: 1.3em;
    :hover  {
      font-size: 1.1em;
    }
  }
`;
