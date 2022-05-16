import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Header, Footer, MainContainer } from "../../index";

function Off() {
  return (
    <MainContainer>
      <Header />

      <InfoContainer>
        <Overview>
          <h2>Off 7</h2>
          <img src="img/bikes/off/off.jpg" alt="cadre Sobre Off" />
          <h4>Cadre 29″ – Usage All Mountain / Enduro – Boost 148mm</h4>
        </Overview>
        <Specifications>
          <SpecsList>
            <p>Specs :</p>
            <li>Cadre 100% cromo 4130 , triangle avant Reynolds 520 Double Butted</li>
            <li>Tube de selle custom Triple Butted</li>
            <li>Pour fourche de 140/150mm de débattement</li>
            <li>Traitement anticorrosion interne-externe par cataphorèse</li>
            <li>Douille de direction 44 mm (pivot tapered ou 1 » 1/8)</li>
            <li>Standard ZS44/28.6 cuvette haute – EC44/40 ou EC44/30 cuvette basse</li>
            <li>Entraxe arrière 12x148mm ( boost )</li>
            <li>Pour transmission mono plateau ( 36d max )</li>
            <li>Collier de selle compatible : 34.9mm</li>
            <li>Tige de selle : 31.6mm</li>
            <li>Guides gaine pour tige de selle télescopique ( interne et externe )</li>
            <li>Boîte de pédalier : BB92</li>
            <li>Accepte un pneu de 29x2.5</li>
            <li>Couleur : Peinture Poudre cuite au four : Noir Mat , Rouge Brique</li>
            <li>Disponible en S/M, M/L, L/XL</li>
          </SpecsList>
          <Price>Prix : 585€ TTC avec axe arrière</Price>
          <SpecsSheet>
            <thead>
              <tr>
                <TableHeader>Géométrie ( avec une fourche de 150mm )</TableHeader>
                <th>S/M</th>
                <th>M/L</th>
                <th>LXL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <MeasureName>Longueur du tube de selle (mm)</MeasureName>
                <td>395</td>
                <td>428</td>
                <td>460</td>
              </tr>
              <tr>
                <MeasureName>Reach (mm)</MeasureName>
                <td>440</td>
                <td>470</td>
                <td>498</td>
              </tr>
              <tr>
                <MeasureName>Stack (mm)</MeasureName>
                <td>646</td>
                <td>655</td>
                <td>662</td>
              </tr>
              <tr>
                <MeasureName>Longueur du top tube (mm)</MeasureName>
                <td>595</td>
                <td>627</td>
                <td>657</td>
              </tr>
              <tr>
                <MeasureName>Longueur du tube de direction (mm)</MeasureName>
                <td>92</td>
                <td>102</td>
                <td>110</td>
              </tr>
              <tr>
                <MeasureName>Chainstay (mm)</MeasureName>
                <td>431</td>
                <td>431</td>
                <td>431</td>
              </tr>
              <tr>
                <MeasureName>Garde au sol (mm)</MeasureName>
                <td>310</td>
                <td>310</td>
                <td>310</td>
              </tr>
              <tr>
                <MeasureName>Empattement (mm)</MeasureName>
                <td>1186</td>
                <td>1221</td>
                <td>1252</td>
              </tr>
              <tr>
                <MeasureName>Angle du tube de selle (deg)</MeasureName>
                <td>76.9°</td>
                <td>76.8°</td>
                <td>76.7°</td>
              </tr>
              <tr>
                <MeasureName>Angle de direction (deg)</MeasureName>
                <td>65°</td>
                <td>65°</td>
                <td>65°</td>
              </tr>
            </tbody>
          </SpecsSheet>
        </Specifications>
        <MosaicContainer>
          <Carousel
            autoPlay
            infiniteLoop={true}
            dynamicHeight={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}>
            <img src="img/bikes/off/off1.jpg" alt="" />
            <img src="img/bikes/off/off2.jpg" alt="" />
            <img src="img/bikes/off/off3.jpg" alt="" />
            <img src="img/bikes/off/off4.jpg" alt="" />
            <img src="img/bikes/off/off5.jpg" alt="" />
            <img src="img/bikes/off/off6.jpg" alt="" />
            <img src="img/bikes/off/off7.jpeg" alt="" />
            <img src="img/bikes/off/off8.jpeg" alt="" />
            <img src="img/bikes/off/off9.jpeg" alt="" />
          </Carousel>
        </MosaicContainer>
      </InfoContainer>
      <Footer />
    </MainContainer>
  );
}

export default Off;

const InfoContainer = styled.div`
  width: 80%;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  > h2 {
    font-size: 2.5em;
  }
  > img {
    width: 50vw;
  }
  > h4 {
    font-size: 2em;
  }
`;

const Specifications = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  font-size: 1.5em;
`;
const SpecsList = styled.ul`
  margin: 0;
  padding: 0;
  > li {
    list-style-type: disc;
    margin-left: 1em;
  }
`;

const Price = styled.h4`
  color: darkred;
`;
const SpecsSheet = styled.table`
  width: 100%;
  text-align: center;
`;

const TableHeader = styled.th`
  text-align: start;
`;

const MeasureName = styled.td`
  text-align: start;
`;

const MosaicContainer = styled.div`
  margin: 2em 0;
}
.slider-wrapper.axis-horizontal {
  height: 50vh !important;
  display: flex;
  align-items: center;
}
`;
