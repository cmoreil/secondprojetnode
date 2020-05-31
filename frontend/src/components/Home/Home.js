import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';
import seedlings from '../../assets/seedlings.jpg';
import seminaire from '../../assets/seminaire.jpg';
import formation from '../../assets/formation.jpg';
import './Home.css';


export class Home extends React.Component {

    showAllActivities = () => {
        this.props.history.push({
          pathname: '/getallproduct/'
        })
      }

      showSeminaries = () => {
        this.props.history.push({
          pathname: '/getSeminaries/'
        })
      }

      showTrainings = () => {
        this.props.history.push({
          pathname: '/getTrainings/'
        })
      }


    render() {
      return (
        <div className="App">
            <Container className="Container">
              <Row>
                <Col xs={6} md={4}>
                  <Card className="Cardhome">
                    <div className="Zoom"><div className="Image"><Card.Img variant="top" src={seedlings} onClick={()=>this.showAllActivities()} alt="Picture of seedlings"/></div></div>
                    <Card.Body>
                    <Card.Title><h2>Nos activités</h2></Card.Title>
                    <Card.Text>
                    Programme de nos activités pour l'année 2020.
                    </Card.Text>
                    <Button className="Buttoncardhome" onClick={()=>this.showAllActivities()}>Voir toutes les activités proposées</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card className="Cardhome">
                  <div className="Zoom"><div className="Image"><Card.Img variant="top" src={seminaire}onClick={()=>this.showSeminaries()} alt="Picture of a seminary"/></div></div>
                    <Card.Body>
                    <Card.Title><h2>Séminaires</h2></Card.Title>
                    <Card.Text>
                    Notre planning de séminaires pour cette année.
                    </Card.Text>
                    <Button className="Buttoncardhome" onClick={()=>this.showSeminaries()}>Voir les séminaires de l'année</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card className="Cardhome">
                  <div className="Zoom"><div className="Image"><Card.Img variant="top" src={formation} onClick={()=>this.showTrainings()} alt="Picture of a training"/></div></div>
                    <Card.Body>
                    <Card.Title><h2>Formations</h2></Card.Title>
                    <Card.Text>
                    Notre planning de formations pour cette année.
                    </Card.Text>
                    <Button className="Buttoncardhome" onClick={()=>this.showTrainings()}>Voir les formations de l'année</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        </div>
            );
        }
    }

export default Home;
