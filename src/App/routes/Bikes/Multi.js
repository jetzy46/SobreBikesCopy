import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header, Footer, MainContainer } from "../../index";

function Multi() {
  return (
    <MainContainer>
      <Header />
      <InfoContainer>
        <Overview>
          <h2>Multi</h2>
          <img src="img/bikes/multi/multi.jpg" alt="cadre Sobre Multi" />
          <h4>Cadre 29″ – Usage XC / Rando – Boost 148mm</h4>
        </Overview>
        <Specifications>
          <SpecsList>
            <p>Specs :</p>
            <li>Cadre 100% Cromo, triangle avant Double & Triple Butted</li>
            <li>Pour fourche de 100/110mm de débattement</li>
            <li>Traitement anticorrosion interne-externe par cataphorèse</li>
            <li>
              Jeu de direction compatible : ZS44/28,6 – EC44/40 ( fourches coniques ) ZS44/28,6 – EC 44/30 ( fourches 1p
              1/8 )
            </li>
            <li>Entraxe arrière 12x148mm ( boost ), patte de dérailleur remplaçable</li>
            <li>( pour axe Maxle 180mm , M12x1.75 , en option ), compatible 10x141 QR</li>
            <li>Pour transmission mono plateau ( 34 dents max ) ou double ( 26/36 dents )</li>
            <li>Diamètre collier de selle : 29,8 ou 30mm</li>
            <li>Pour tige de selle 27,2mm ( compatible tige télescopique interne )</li>
            <li>Emplacement porte bidon : 1 ( tailles S & M ) – 2 ( tailles L & XL )</li>
            <li>Boîte de pédalier : 73 mm BSA</li>
            <li>Accepte un pneu de 29x2.35</li>
            <li>Couleur : Bleu noir et Gris brume ( Peinture Poudre cuite au four )</li>
            <li>Sticker diagonal 'Signature' ou 'Typo'</li>
            <li>Disponible en S/M , M/L , L/XL</li>
          </SpecsList>
          <Price>Prix : 585€ TTC avec axe arrière</Price>
          <SpecsSheet>
            <thead>
              <tr>
                <TableHeader>Géométrie ( avec une fourche de 100mm )</TableHeader>
                <th>S/M</th>
                <th>M/L</th>
                <th>L/XL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <MeasureName>Longueur du tube de selle (mm)</MeasureName>
                <td>405</td>
                <td>440</td>
                <td>485</td>
              </tr>
              <tr>
                <MeasureName>Reach (mm)</MeasureName>
                <td>421</td>
                <td>455</td>
                <td>480</td>
              </tr>
              <tr>
                <MeasureName>Stack (mm)</MeasureName>
                <td>618</td>
                <td>630</td>
                <td>643</td>
              </tr>
              <tr>
                <MeasureName>Longueur du top tube (mm)</MeasureName>
                <td>572</td>
                <td>609</td>
                <td>638</td>
              </tr>
              <tr>
                <MeasureName>Longueur du tube de direction (mm)</MeasureName>
                <td>98</td>
                <td>112</td>
                <td>125</td>
              </tr>
              <tr>
                <MeasureName>Chainstay (mm)</MeasureName>
                <td>431</td>
                <td>431</td>
                <td>431</td>
              </tr>
              <tr>
                <MeasureName>Garde au sol (mm)</MeasureName>
                <td>307</td>
                <td>307</td>
                <td>307</td>
              </tr>
              <tr>
                <MeasureName>Empattement (mm)</MeasureName>
                <td>1120</td>
                <td>1159</td>
                <td>1189</td>
              </tr>
              <tr>
                <MeasureName>Angle du tube de selle (deg)</MeasureName>
                <td>76°</td>
                <td>76°</td>
                <td>76°</td>
              </tr>
              <tr>
                <MeasureName>Angle de direction (deg)</MeasureName>
                <td>68°</td>
                <td>68°</td>
                <td>68°</td>
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
            <img src="img/bikes/multi/multi1.jpeg" alt="" />
            <img src="img/bikes/multi/multi2.jpeg" alt="" />
            <img src="img/bikes/multi/multi3.jpeg" alt="" />
            <img src="img/bikes/multi/multi4.jpeg" alt="" />
            <img src="img/bikes/multi/multi5.jpeg" alt="" />
            <img src="img/bikes/multi/multi6.jpeg" alt="" />
            <img src="img/bikes/multi/multi7.jpeg" alt="" />
            <img src="img/bikes/multi/multi8.jpeg" alt="" />
          </Carousel>
        </MosaicContainer>
      </InfoContainer>
      <Footer />
    </MainContainer>
  );
}

export default Multi;

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
`;
