import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <MainContainer>
      <ImageContainer>
        <Link to="/">
          <img src="img/sobreLogo.png" alt="logo Sobre" />
        </Link>
        <SocialsContainer>
          <a href="https://www.instagram.com/sobrebikes/" target="_blank" rel="noreferrer">
            <img src="img/insta.png" alt="logo Instagram" />
          </a>
          <a href="https://fr-fr.facebook.com/sobrebikes/" target="_blank" rel="noreferrer">
            <img src="img/facebook.png" alt="logo Facebook" />
          </a>
        </SocialsContainer>
      </ImageContainer>
      <Menu>
        <LinkContainer>
          <LinksMenu to="/">Cadres</LinksMenu>
        </LinkContainer>
        <LinkContainer>
          <LinksMenu to="/articles">Articles</LinksMenu>
        </LinkContainer>
        <LinkContainer>
          <LinksMenu to="/revendeurs">Revendeurs</LinksMenu>
        </LinkContainer>
        <LinkContainer>
          <LinksMenu to="/contact">Contact</LinksMenu>
        </LinkContainer>
        <LinkContainer>
          <ExternalLink href="http://www.sobreshop.com/" target="_blank" rel="noreferrer">
            Boutique
          </ExternalLink>
        </LinkContainer>
      </Menu>
    </MainContainer>
  );
}

export default Header;

const MainContainer = styled.div`
  width: 100%;
  height: 30vh;
  background: url(${process.env.PUBLIC_URL + "img/bgHeader.jpg"}) no-repeat center/100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 899px) and (orientation: portrait) {
    height: 50vh;
    background-size: auto 130%;
  }
  @media only screen and (max-width: 899px) and (orientation: landscape) {
    height: 110vh;
    background-size: 100% auto;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 1em 2em 0 2em;
  @media only screen and (max-width: 899px) {
  }
  img {
    max-height: 100%;
    @media only screen and (max-width: 899px) {
      max-height: 50%;
    }
  }
`;

const SocialsContainer = styled.div`
  display: inline;
`;

const Menu = styled.ul`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 899px) {
    flex-direction: column;
    margin-bottom: 2em;
  }
`;

const LinkContainer = styled.li`
  list-style-type: none;
  width: 20vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media only screen and (max-width: 1299px) {
    font-size: 2em;
    :hover {
      font-size: 1.5em;
    }
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
  @media only screen and (max-width: 1299px) {
    font-size: 2em;
    :hover {
      font-size: 1.5em;
    }
  }
`;
