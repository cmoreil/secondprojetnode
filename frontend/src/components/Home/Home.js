import React from "react";
import { Card, Container, Button} from 'react-bootstrap';
import './Home.css';


export class Home extends React.Component {

    showAllActivities = () => {
        this.props.history.push({
          pathname: '/getallproduct/'
        })
      }

    render() {
      return (
        <div className="App">
            <Container className="Container">
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Buttoncardhome" onClick={()=>this.showAllActivities()}>See alls activities</Button>
                </Card.Body>
                </Card>
            </Container>
        </div>
            );
        }
    }

export default Home;
