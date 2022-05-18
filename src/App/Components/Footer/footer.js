import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <MainContainer>
      <Contact>Pour toute demande, merci d'utiliser l'adresse suivante: contactsobre@gmail.com</Contact>
      <Links>
        <ul>
          <LinkContainer>
            <LinksMenu to="/la-marque">La marque</LinksMenu>
          </LinkContainer>
          <LinkContainer>
            <LinksMenu to="/revendeurs">Revendeurs</LinksMenu>
          </LinkContainer>
          <LinkContainer>
            <LinksMenu to="/contact">Contact</LinksMenu>
          </LinkContainer>
          <LinkContainer>
            <LinksMenu to="/articles">Articles</LinksMenu>
          </LinkContainer>
          <LinkContainer>
            <ExternalLink href="http://www.sobreshop.com/">Boutique</ExternalLink>
          </LinkContainer>
          <LinkContainer>
            <LinksMenu to="/copyright">SOBRE Bikes - copyright 2022</LinksMenu>
          </LinkContainer>
        </ul>
      </Links>
    </MainContainer>
  );
}

export default Footer;

const MainContainer = styled.div`
  width: 100%;
  height: 30vh;
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
    :hover {
      font-size: 1.1em;
    }
  }
`;
const LinksMenu = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 800;
  font-size: 2.5em;
  text-shadow: 2px 2px black;
  :hover {
    font-size: 2em;
  }
`;
const ExternalLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 800;
  font-size: 2.5em;
  text-shadow: 2px 2px black;
  :hover {
    font-size: 2em;
  }
`;
