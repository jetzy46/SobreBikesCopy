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
        <DescriptionContainer>
          <Description>{props.description}</Description>
        </DescriptionContainer>
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
  border: 1px solid lime;
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
  @media only screen and (max-width: 899px) and (orientation: portrait) {
    width: 80vw;
    height: auto;
    max-height: 90vh;
    margin: 1em 0;
  }
  @media only screen and (max-width: 899px) and (orientation: landscape) {
    width: 70vw;
    height: auto;
    max-height: 120vh;
  }
`;
const Thumbnail = styled.div`
  width: 100%;
  max-height: 55%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 100%;
  }
  @media only screen and (max-width: 899px) {
    max-height: 40%;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h3 {
    font-size: 2.5em;
    text-align: center;
    margin: 0.6em 0;
    @media only screen and (max-width: 899px) {
      font-size: 2em;
      margin: 0;
      margin-top: 0.2em;
    }
  }
  > a {
    margin: 0.6em;
    font-size: 1.4em;
    font-weight: 500;
  }
  > p {
    margin: 0;
    @media only screen and (max-width: 899px) {
      font-size: 1em;
    }
  }
`;
const DescriptionContainer = styled.div`
  border: 1px solid orange;
  width: 100%;
`;

const Description = styled.p`
  width: 100%;
  margin: 0;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media only screen and (max-width: 899px) {
    padding: 1.6em 0;
  }
`;
