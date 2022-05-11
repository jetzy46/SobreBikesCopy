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
          <a href="https://www.instagram.com/sobrebikes/" target="BLANK_">
            <img src="img/insta.png" alt="logo Instagram" />
          </a>
          <a href="https://fr-fr.facebook.com/sobrebikes/" target="BLANK_">
            <img src="img/facebook.png" alt="logo Facebook" />
          </a>
        </SocialsContainer>
      </ImageContainer>
      <Menu>
        <ContainerLinks>
          <LinksMenu href="/">Cadres</LinksMenu>
        </ContainerLinks>
        <ContainerLinks>
          <LinksMenu href="/">Articles</LinksMenu>
        </ContainerLinks>
        <ContainerLinks>
          <LinksMenu href="/">Revendeurs</LinksMenu>
        </ContainerLinks>
        <ContainerLinks>
          <LinksMenu href="/">Contact</LinksMenu>
        </ContainerLinks>
        <ContainerLinks>
          <LinksMenu href="/">Boutique</LinksMenu>
        </ContainerLinks>
      </Menu>
    </MainContainer>
  );
}

export default Header;

const MainContainer = styled.div`
  width: 100vw;
  height: 30vh;
  background: url(${process.env.PUBLIC_URL + "img/bgHeader.jpg"}) no-repeat center/100%;
  display: flex;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 1em 2em 0 2em;
  img {
    max-height: 100%;
  }
`;

const SocialsContainer = styled.div``;

const Menu = styled.ul`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
`;

const ContainerLinks = styled.li`
  list-style-type: none;
  width: 20vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinksMenu = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 800;
  font-size: 2.5em;
  text-shadow: 2px 2px black;
  :hover {
    font-size: 2em;
  }
`;
