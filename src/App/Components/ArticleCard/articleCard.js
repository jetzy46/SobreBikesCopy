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
        <p>{props.description}</p>
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
  width: 28vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 1em 2em;
  @media only screen and (max-width: 1299px) {
    width: 40vw;
  }
  @media only screen and (max-width: 799px) {
    width: 80vw;
  }
`;
const Thumbnail = styled.div`
  width: 100%;
  max-height: 55%;
  overflow: hidden;
  > img {
    width: 100%;
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
  }
  > p {
    text-align: center;
    margin: 0;
    padding: 0;
  }
  > a {
    margin: 1em;
    font-size: 1.4em;
    font-weight: 500;
  }
`;
