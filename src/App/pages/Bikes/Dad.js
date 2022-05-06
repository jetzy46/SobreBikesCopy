import React from "react";
import styled from "styled-components";

function Dad(props) {
  return (
    <MainContainer>
      <div>
        <h2>Dad 11</h2>
        <img src="img/bikes/dad/dad.jpeg" alt="cadre Sobre Dad" />
        <h4>Cadre 29″ – Usage XC / All Mountain – Boost 148mm</h4>
      </div>
      <div>
        <p>
          Modèle emblématique de la gamme, le Dad a su convertir de nombreux pratiquants au format 29 pouces.
          <br />
          Grâce à sa géométrie il combine un parfait équilibre entre maniabilité et stabilité , le rendant ludique et
          efficace sur tous types de terrains.
        </p>
        <ul>
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
        </ul>
        <h4>Prix : 579€ TTC avec axe arrière et kit tige télescopique</h4>
        <table>
          <thead>
            <tr>
              <th>Géométrie ( avec une fourche de 120mm )</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Longueur du tube de selle (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Reach (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Stack (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Longueur du top tube (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Longueur du tube de direction (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Chainstay (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Garde au sol (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Empattement (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Angle du tube de selle (deg)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Angle de direction (deg)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Longueur maximal d'insertion de la tige de selle (mm)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <img src="http://via.placeholder.com/192x108" alt="" />
      </div>
    </MainContainer>
  );
}

export default Dad;

const MainContainer = styled.div`
  width: 80%;
`;
