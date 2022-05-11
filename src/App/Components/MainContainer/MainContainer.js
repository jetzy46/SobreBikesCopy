import React from "react";
import styled from "styled-components";

function MainContainer(props) {
  return <Container>{props.children}</Container>;
}

export default MainContainer;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
