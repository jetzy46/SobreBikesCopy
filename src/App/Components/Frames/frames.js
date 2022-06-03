import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Frames() {
  return (
    <MainContainer id="frames">
      <Title>
        <h2>Les cadres</h2>
      </Title>
      <FrameSelection>
        <Link to="/multi">
          <MultiFrame>Multi</MultiFrame>
        </Link>
        <Link to="/dad">
          <DadFrame>Dad</DadFrame>
        </Link>
        <Link to="/off">
          <OffFrame>Off</OffFrame>
        </Link>
        <Link to="/versatile">
          <VersatileFrame>Versatile</VersatileFrame>
        </Link>
      </FrameSelection>
      <Store>
        <LinkSocials href="https://www.instagram.com/sobrebikes/" target="_blank" rel="noreferrer">
          <img src="img/insta.png" alt="logo Instagram" />
        </LinkSocials>
        <TitleStore href="http://www.sobreshop.com/">acceder a la boutique</TitleStore>
        <LinkSocials href="https://fr-fr.facebook.com/sobrebikes/" target="_blank" rel="noreferrer">
          <img src="img/facebook.png" alt="logo Facebook" />
        </LinkSocials>
      </Store>
    </MainContainer>
  );
}

export default Frames;

const MainContainer = styled.div`
  width: 100vw;
  height: 50vh;
  @media only screen and (max-width: 899px) and (orientation: portrait) {
    height: 100vh;
  }
  @media only screen and (max-width: 899px) and (orientation: landscape) {
    height: 140vh;
  }
`;
const Title = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 899px) and (orientation: portrait) {
    height: 10%;
  }
  @media only screen and (max-width: 899px) and (orientation: landscape) {
    height: 15%;
  }
  > h2 {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 700;
    margin: 0;
    @media only screen and (max-width: 899px) {
      font-size: 1.8em;
    }
  }
`;
const FrameSelection = styled.div`
  height: 60%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 899px) and (orientation: portrait) {
    height: 80%;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 899px) and (orientation: landscape) {
    height: 70%;
    flex-direction: column;
    justify-content: center;
  }

  > * {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    :hover {
      opacity: 1;
    }
    @media only screen and (max-width: 1299px) {
      height: auto;
    }
    @media only screen and (max-width: 899px) {
      width: 100%;
      height: 25%;
    }
  }
`;

const MultiFrame = styled.div`
  background: url(${process.env.PUBLIC_URL + "img/frames/multi.jpg"}) no-repeat center/110%;
  width: 25vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  @media only screen and (max-width: 1299px) {
    font-size: 2.5em;
  }
  @media only screen and (max-width: 899px) {
    width: 100%;
  }
`;
const DadFrame = styled.div`
  background: url(${process.env.PUBLIC_URL + "img/frames/dad.jpg"}) no-repeat center/100%;
  width: 25vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  @media only screen and (max-width: 1299px) {
    font-size: 2.5em;
  }
  @media only screen and (max-width: 899px) {
    width: 100%;
  }
`;
const OffFrame = styled.div`
  background: url(${process.env.PUBLIC_URL + "img/frames/off.jpg"}) no-repeat center/100%;
  width: 25vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  @media only screen and (max-width: 1299px) {
    font-size: 2.5em;
  }
  @media only screen and (max-width: 899px) {
    width: 100%;
  }
`;
const VersatileFrame = styled.div`
  background: url(${process.env.PUBLIC_URL + "img/frames/versatile.jpg"}) no-repeat center/100%;
  width: 25vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  @media only screen and (max-width: 1299px) {
    font-size: 2.5em;
  }
  @media only screen and (max-width: 899px) {
    width: 100%;
  }
`;
const Store = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 899px) and (orientation: portrait) {
    height: 10%;
  }
  @media only screen and (max-width: 899px) and (orientation: landscape) {
    height: 15%;
  }
`;

const TitleStore = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.5em;
  text-align: center;
  :hover {
    color: red;
  }
  @media only screen and (max-width: 1299px) {
    font-weight: 500;
    font-size: 2em;
  }
  @media only screen and (max-width: 899px) {
    font-size: 1.6em;
  }
`;
const LinkSocials = styled.a`
  @media only screen and (max-width: 899px) {
    display: none;
  }
`;
