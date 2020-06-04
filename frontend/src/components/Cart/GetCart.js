import React from "react";
import { Card, Dropdown, Button } from 'react-bootstrap';
import API from "../../utils/API";
import './GetCart.css';

export class getCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        };
      }

    async componentDidMount() {
        let cart = await API.getCart();
        let data = cart.data;
        this.setState({ cart: data.cart});
    }

    render() {
        return (
            <div className="GetCart">
            <h2>Récapitulatif de votre/s inscription(s)</h2>
            {this.state.comments.map(comment => (
                <Card>
                <Card.Img src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Réservation(s) en cours</Card.Title>
                            <Card.Text>
                                <h3>Pas d'inscription en cours.</h3>
                            </Card.Text>
                        <Dropdown as={ButtonGroup}>
                            <Button>Plus</Button>
                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Inscrire une personne supplémentaire</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Annuler ma/mes inscription(s) en cours</Dropdown.Item>
                                </Dropdown.Menu>
                         </Dropdown>
                         <Card.Text>
                            <h3>Total</h3>
                        </Card.Text>
                    </Card.Body>
                    <hr></hr>
                    <Card.Body>
                        <Card.Link href="#">Enregistrer et égler ma/mes inscription(s) en cours</Card.Link>
                    </Card.Body>
                </Card>
                  ))}
            </div>
        )
    }
}

export default getCart;

