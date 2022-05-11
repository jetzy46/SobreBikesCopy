import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Frames() {
  return (
    <MainContainer>
      <Title>
        <h2>Les cadres</h2>
      </Title>
      <FrameSelection>
        <MultiFrame>
          <Link to="/multi">Multi</Link>
        </MultiFrame>
        <DadFrame>
          <Link to="/dad">Dad</Link>
        </DadFrame>
        <OffFrame>
          <Link to="/off">Off</Link>
        </OffFrame>
        <VersatileFrame>
          <Link to="/versatile">versatile</Link>
        </VersatileFrame>
      </FrameSelection>
      <Store>
        <a href="https://www.instagram.com/sobrebikes/" target="BLANK_">
          <img src="img/insta.png" alt="logo Instagram" />
        </a>
        <TitleStore href="/">acceder a la boutique</TitleStore>
        <a href="https://fr-fr.facebook.com/sobrebikes/" target="BLANK_">
          <img src="img/facebook.png" alt="logo Facebook" />
        </a>
      </Store>
    </MainContainer>
  );
}

export default Frames;

const MainContainer = styled.div`
  width: 100vw;
  height: 50vh;
`;
const Title = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > h2 {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 700;
    margin: 0;
  }
`;
const FrameSelection = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-evenly;
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
  }
`;
// const LinksFrames = styled.Link`
//   width: 100%;
//   height: 75%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 3em;
//   transform: scale(1, 1.33);
//   text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
// `;

const MultiFrame = styled.div`
  background: url(${process.env.PUBLIC_URL + "img/frames/multi.jpg"}) no-repeat center/110%;
`;
const DadFrame = styled.div`
  background: url(${process.env.PUBLIC_URL + "img/frames/dad.jpg"}) no-repeat center/100%;
`;
const OffFrame = styled.div`
  background: url(${process.env.PUBLIC_URL + "img/frames/off.jpg"}) no-repeat center/100%;
`;
const VersatileFrame = styled.div`
  background: url(${process.env.PUBLIC_URL + "img/frames/versatile.jpg"}) no-repeat center/100%;
`;
const Store = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TitleStore = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.5em;
  :hover {
    color: red;
  }
`;
