import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header, Footer, MainContainer } from "../../index";

function Versatile() {
  return (
    <MainContainer>
      <Header />
      <InfoContainer>
        <Overview>
          <h2>Versatile</h2>
          <img src="img/bikes/versatile/versatile.jpg" alt="cadre Sobre Versatile" />
          <h4>Cadre Gravel Bike</h4>
        </Overview>
        <Specifications>
          <p>
            Endurance ou Gravel bike , peu importe le nom qu’on lui donne ; le Versatile représente le vélo polyvalent
            par excellence.
            <br />
            Selon son montage il est capable de s’aventurer sur tout type de routes ou sentiers et de se transformer si
            besoin en un compagnon de voyage.
          </p>
          <SpecsList>
            <p>Specs :</p>
            <li>Triangle principal Reynolds 520 Double Butted</li>
            <li>Arrière Cromo 4130</li>
            <li>Traitement anticorrosion interne-externe ( cataphorèse / ED Black Protect )</li>
            <li>Douille de direction 44 mm ( pivot tapered ou 1″1/8 )</li>
            <li>Jeu de direction haut : ZS44/28.6, bas : EC44/40 ( tapered ) ou EC44/30 ( 1″1/8 )</li>
            <li>Tige de selle : 27.2 mm</li>
            <li>Collier de selle : 29.8 mm ( livré avec le cadre )</li>
            <li>
              Dérailleur avant 28.6 mm ( Tailles S & M ) , 31,8mm ( Tailles L & XL ) collier haut, tirage haut ou bas (
              Poulie en option pour tirage bas )
            </li>
            <li>Boîte de pédalier : 68 mm filetage BSA</li>
            <li>
              Compatible Freinage Flatmount ( max : 160mm ), <b>Flatmount ONLY</b>
            </li>
            <li>
              Compatible Axe arrière 12 x142mm (163mm , M12x1.5, type Maxle ), <b>en option</b>
            </li>
            <li>Patte de dérailleur démontable</li>
            <li>Passage de pneu de 700x42 ou 650x48</li>
            <li>Montage de 3 porte-bidons</li>
            <li>Œillets et points de fixation pour porte-bagages ou/et garde-boues</li>
            <li>Cadre livré avec collier de selle, clips durite et vis dans tous les inserts</li>
            <li>Couleur : Noir brillant , Olive</li>
            <li>Peinture Poudre cuite au four</li>
            <li>Disponible en 4 tailles : S, M, L, XL</li>
            <li>Poids : 2270g en taille L ( cadre nu avec patte de dérailleur )</li>
            <p>Compatible avec: </p>
            <li>Fourches de hauteur comprise entre 395 et 405 mm , déport entre 40 et 50 mm</li>
            <li>Fourches à pivot 1p 1/8 avec jeu de direction au standard ZS44/28,6 – EC44/30</li>
            <li>Fourches à pivot Tapered 1,5 pouces avec jeu de direction au standard ZS44/28,6 – EC44/40</li>
          </SpecsList>
          <Price>Prix : 525€ TTC</Price>
          <SpecsSheet>
            <thead>
              <tr>
                <TableHeader>Géométrie ( avec roue en 700x32C et une fourche de 400mm )</TableHeader>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <MeasureName>Longueur du tube de selle (mm)</MeasureName>
                <td>440</td>
                <td>475</td>
                <td>510</td>
                <td>545</td>
              </tr>
              <tr>
                <MeasureName>Reach (mm)</MeasureName>
                <td>371</td>
                <td>385</td>
                <td>397</td>
                <td>409</td>
              </tr>
              <tr>
                <MeasureName>Stack (mm)</MeasureName>
                <td>577</td>
                <td>588</td>
                <td>599</td>
                <td>611</td>
              </tr>
              <tr>
                <MeasureName>Longueur du top tube (mm)</MeasureName>
                <td>541</td>
                <td>559</td>
                <td>575</td>
                <td>590</td>
              </tr>
              <tr>
                <MeasureName>Longueur du tube de direction (mm)</MeasureName>
                <td>140</td>
                <td>150</td>
                <td>162</td>
                <td>174</td>
              </tr>
              <tr>
                <MeasureName>Chainstay (mm)</MeasureName>
                <td>424</td>
                <td>424</td>
                <td>424</td>
                <td>424</td>
              </tr>
              <tr>
                <MeasureName>Garde au sol (mm)</MeasureName>
                <td>280</td>
                <td>280</td>
                <td>280</td>
                <td>280</td>
              </tr>
              <tr>
                <MeasureName>Empattement (mm)</MeasureName>
                <td>1013</td>
                <td>1026</td>
                <td>1043</td>
                <td>1059</td>
              </tr>
              <tr>
                <MeasureName>Angle du tube de selle (deg)</MeasureName>
                <td>73,5°</td>
                <td>73,5°</td>
                <td>73,5°</td>
                <td>73,5°</td>
              </tr>
              <tr>
                <MeasureName>Angle de direction (deg)</MeasureName>
                <td>71°</td>
                <td>71,5°</td>
                <td>71,5°</td>
                <td>71,5°</td>
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
            <img src="img/bikes/versatile/versatile1.jpg" alt="" />
            <img src="img/bikes/versatile/versatile2.jpg" alt="" />
            <img src="img/bikes/versatile/versatile3.jpg" alt="" />
            <img src="img/bikes/versatile/versatile4.jpg" alt="" />
            <img src="img/bikes/versatile/versatile5.jpg" alt="" />
            <img src="img/bikes/versatile/versatile6.jpg" alt="" />
            <img src="img/bikes/versatile/versatile7.jpg" alt="" />
            <img src="img/bikes/versatile/versatile8.jpg" alt="" />
            <img src="img/bikes/versatile/versatile9.jpg" alt="" />
            <img src="img/bikes/versatile/versatile10.jpg" alt="" />
          </Carousel>
        </MosaicContainer>
      </InfoContainer>
      <Footer />
    </MainContainer>
  );
}

export default Versatile;

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
  > p {
    margin: 1em 0;
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
  margin: 2em 0;
}
`;
