import React from "react";
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';
import Banniere from '../../assets/Banniere.jpg';
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './About.css';


export class About extends React.Component {

    render() {
      return (
        <div>
            <Container className="Container">
              <Row>
                <Col xs={6} md={4}>
                  <Card className="Quisommesnous">
                    <Card.Body className="Textquisommesnous">
                    <Card.Title ><h1>Qui sommes-nous ?</h1></Card.Title>
                    <Card.Text>
                    <p>Notre fondation est née de la mouvance des appels contemporains à repenser notre monde, du documentaire français de 2015 "Demain"(par Cyril Dion et Mélanie Laurent) à l’appel de Greta Thunberg, en passant par l’Affaire du siècle.</p>
                    <p>Nous avons choisi de diffuser plus largement les principes de la permaculture, au-delà du traditionnel périmètre campagnard, pour que les citadins prennent conscience qu’ils peuvent aussi agir. D’abord pour eux, par l’acquisition de savoirs et d’une certaine autosuffisance alimentaire (limitée, il est vrai), puis pour la planète.</p>
                    <p>Si les principes de la permaculture sont accessibles à tous, nous nous efforçons d’adapter ses méthodes aux espaces spécifiquement urbains : les toits, les balcons, les rebords de fenêtres et pourquoi pas votre plan de travail en cuisine ! Il ne s’agit pas de dire que tout peut être cultivé en tous lieux et que demain la ville remplacera  nos campagnes (ce que nous ne souhaitons pas par ailleurs), mais de redonner aux Citadains/ines une place dans le circuit de la production de leurs besoins alimentaires.</p>
                    <h4>Pour ce faire, nous proposons à la fois des séminaires et des formations (rendez-vous sur "Home") et un espace d’échange, accessible après inscription au site (rendez-vous sur "Se connecter/S'inscrire" puis "Mon espace").</h4>
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card className="Savetheplanet">
                  <Card.Img src={Banniere} alt="Bannière 'Save the planet'" />
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card className="Noustrouver">
                    <Card.Body>
                    <Card.Title> <h1>Nous contacter</h1></Card.Title>
                    <Card.Text>
                        <h2>Nos locaux</h2>
                        <p>Pour nous contacter ou nous rejoindre le temps d'un séminaire ou d'une formation : </p><br></br>
                        <p className="Adress">Mon potager urbain</p>
                        <p className="Adress">Domaine de la vallée verte</p>
                        <p className="Adress">Route du pignon de pin</p>
                        <p className="Adress">Rennes</p><br></br><br></br>
                        <h2>Nos coordonnées</h2>
                        <p className="Adress">Téléphone: </p>
                        <p className="Adress">02.40.99.00.00</p>
                        <p className="Adress">Email:</p>
                        <p className="Adress"> monpotagerurbain@permaculture.org</p>
                        <br></br><br></br>
                        <br></br>
                        <h2>Toute notre actualité</h2>
                        <FaFacebookF color="#1a936f" size={25} /> <FaTwitter color="#1a936f" size={25}/> <FaPinterestP color="#1a936f" size={25}/>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        </div>
            );
        }
    }

export default About;
