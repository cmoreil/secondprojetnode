import React from "react";
import { Card, Container, Button, Row, Col} from 'react-bootstrap';
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
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="Buttoncardhome" onClick={()=>this.showAllActivities()}>Voir toutes les activités proposées</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="Buttoncardhome" onClick={()=>this.showSeminaries()}>Voir les séminaires de l'année</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
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
