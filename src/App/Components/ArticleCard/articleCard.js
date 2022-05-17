import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <MainContainer>
      <Thumbnail />
      <TextContainer>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link}>Lire la suite</a>
        <p>
          Publié le {props.publishedDate} par {props.author}
        </p>
      </TextContainer>
    </MainContainer>
  );
}

export default Card;

const MainContainer = styled.div``;
const Thumbnail = styled.div``;
const TextContainer = styled.div``;
