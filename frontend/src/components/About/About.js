import React from "react";
import { Card, Container, Row, Col} from 'react-bootstrap';
import './About.css';


export class About extends React.Component {

    render() {
      return (
        <div>
            <Container className="Container">
              <Row>
                <Col xs={6} md={4}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Qui sommes-nous ?</Card.Title>
                    <Card.Text>
                    Notre fondation blablablablabla...
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Nous contacter</Card.Title>
                    <Card.Text>
                        <h2>Nos locaux</h2>
                        <p>Blablablabla</p>
                        <h2>Suivez-nous</h2>
                        <p>icones facbook, truc et truc</p>
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
