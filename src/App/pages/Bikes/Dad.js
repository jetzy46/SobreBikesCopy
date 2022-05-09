import React from "react";
import styled from "styled-components";

function Dad() {
  return (
    <MainContainer>
      <Overview>
        <h2>Dad 11</h2>
        <img src="img/bikes/dad/dad.jpeg" alt="cadre Sobre Dad" />
        <h4>Cadre 29″ – Usage XC / All Mountain – Boost 148mm</h4>
      </Overview>
      <Specifications>
        <p>
          Modèle emblématique de la gamme, le Dad a su convertir de nombreux pratiquants au format 29 pouces.
          <br />
          Grâce à sa géométrie il combine un parfait équilibre entre maniabilité et stabilité , le rendant ludique et
          efficace sur tous types de terrains.
        </p>
        <SpecsList>
          <p>Specs :</p>
          <li>Triangle principal Reynolds 520 Double Butted</li>
          <li>Arrière Cromo 4130</li>
          <li>Pour fourche de 120/130mm de débattement</li>
          <li>Traitement anticorrosion interne-externe par cataphorèse</li>
          <li>
            Douille de direction 44 mm (pivot tapered ou 1p 1/8) – Standard ZS44/28.6 cuvette haute – EC44/40 ou EC44/30
            cuvette basse
          </li>
          <li>Entraxe arrière 12x148mm ( boost )</li>
          <li>Compatible axe arrière standard Maxle ( Rock Shox), 180mm M12x1.75</li>
          <li>Pour transmission mono plateau ( 34d max )</li>
          <li>Collier de selle compatible : 34.9mm</li>
          <li>Tige de selle : 30.9mm</li>
          <li>Compatible tiges de selle télescopiques internes ou externes</li>
          <li>Emplacement porte bidon : 1 ( tailles S & M ) – 2 ( tailles L & XL )</li>
          <li>Boîte de pédalier : 73 mm BSA</li>
          <li>Accepte un pneu de 29x2.4</li>
          <li>Couleur : Peinture Poudre cuite au four : Noir Mat , Gris Azur</li>
          <li>Sticker diagonal 'Signature' ou 'Typo'</li>
          <li>Disponible en S , M , L , XL</li>
        </SpecsList>
        <Price>Prix : 579€ TTC avec axe arrière et kit tige télescopique</Price>
        <SpecsSheet>
          <thead>
            <tr>
              <TableHeader>Géométrie ( avec une fourche de 120mm )</TableHeader>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <MeasureName>Longueur du tube de selle (mm)</MeasureName>
              <td>415</td>
              <td>440</td>
              <td>465</td>
              <td>490</td>
            </tr>
            <tr>
              <MeasureName>Reach (mm)</MeasureName>
              <td>417</td>
              <td>438</td>
              <td>462</td>
              <td>480</td>
            </tr>
            <tr>
              <MeasureName>Stack (mm)</MeasureName>
              <td>638</td>
              <td>645</td>
              <td>652</td>
              <td>660</td>
            </tr>
            <tr>
              <MeasureName>Longueur du top tube (mm)</MeasureName>
              <td>583</td>
              <td>608</td>
              <td>630</td>
              <td>650</td>
            </tr>
            <tr>
              <MeasureName>Longueur du tube de direction (mm)</MeasureName>
              <td>100</td>
              <td>108</td>
              <td>115</td>
              <td>123</td>
            </tr>
            <tr>
              <MeasureName>Chainstay (mm)</MeasureName>
              <td>430</td>
              <td>430</td>
              <td>430</td>
              <td>430</td>
            </tr>
            <tr>
              <MeasureName>Garde au sol (mm)</MeasureName>
              <td>309</td>
              <td>309</td>
              <td>309</td>
              <td>309</td>
            </tr>
            <tr>
              <MeasureName>Empattement (mm)</MeasureName>
              <td>1130</td>
              <td>1156</td>
              <td>1180</td>
              <td>1200</td>
            </tr>
            <tr>
              <MeasureName>Angle du tube de selle (deg)</MeasureName>
              <td>75,7°</td>
              <td>75,7°</td>
              <td>75,7°</td>
              <td>75,7°</td>
            </tr>
            <tr>
              <MeasureName>Angle de direction (deg)</MeasureName>
              <td>67.5°</td>
              <td>67.5°</td>
              <td>67.5°</td>
              <td>67.5°</td>
            </tr>
            <tr>
              <MeasureName>Longueur maximale d'insertion de la tige de selle (mm)</MeasureName>
              <td>250</td>
              <td>275</td>
              <td>245</td>
              <td>270</td>
            </tr>
          </tbody>
        </SpecsSheet>
      </Specifications>
      <MosaicContainer>
        <img src="http://via.placeholder.com/192x108" alt="" />
      </MosaicContainer>
    </MainContainer>
  );
}

export default Dad;

const MainContainer = styled.div`
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
  > p {
    margin: 0 0 1em 0;
    font-weight: 500;
  }
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-item: center;
  > img {
    margin: 0.4em;
    height: 8vh;
    width: 15vw;
  }
`;
