import React from "react";
import { Header, Frames, BrandBrief, Footer, MainContainer } from "./index";

function App() {
  document.title = "Sobre Bikes – A Chacun son Steel";
  return (
    <MainContainer>
      <Header />
      <Frames />
      <BrandBrief />
      <Footer />
    </MainContainer>
  );
}

export default App;
