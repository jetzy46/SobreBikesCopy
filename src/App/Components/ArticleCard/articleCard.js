import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <MainContainer>
      <Thumbnail>
        <img src={props.thumbnail} alt="" />
      </Thumbnail>
      <TextContainer>
        <h3>{props.title}</h3>
        <Description>{props.description}</Description>
        <a href={props.link} target="_blank" rel="noreferrer">
          Lire la suite ➔
        </a>
        <p>
          Publié le {props.publishedDate} par {props.author}
        </p>
      </TextContainer>
    </MainContainer>
  );
}
export default Card;

const MainContainer = styled.div`
  width: 26vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 1em 2em;
  @media only screen and (max-width: 1299px) {
    width: 38vw;
  }
  @media only screen and (max-width: 799px) and (orientation: portrait) {
    width: 80vw;
    height: auto;
    max-height: 90vh;
    margin: 1em 0;
  }
  @media only screen and (max-width: 799px) and (orientation: landscape) {
    width: 70vw;
    height: auto;
    max-height: 120vh;
  }
`;
const Thumbnail = styled.div`
  width: 100%;
  max-height: 55%;
  overflow: hidden;
  > img {
    width: 100%;
  }
  @media only screen and (max-width: 799px) {
    max-height: 40%;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h3 {
    font-size: 2.5em;
    text-align: center;
    margin: 0.6em 0;
    @media only screen and (max-width: 799px) {
      font-size: 2em;
      margin: 0;
      margin-top: 0.2em;
    }
  }
  > a {
    margin: 1em;
    font-size: 1.4em;
    font-weight: 500;
  }
  > p {
    @media only screen and (max-width: 799px) {
      font-size: 1em;
      margin: 0;
    }
  }
`;

const Description = styled.p`
  width: 100%;
  text-align: center;
  margin: 0;
  @media only screen and (max-width: 799px) {
    padding: 1.6em 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
