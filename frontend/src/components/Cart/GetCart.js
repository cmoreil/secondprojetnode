import React from "react";
import { Card, Dropdown, Button, ButtonGroup, Table } from 'react-bootstrap';
import API from "../../utils/API";
import './GetCart.css';

export class GetCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        };
      }

      async componentDidMount() {
        let allcart = await API.getCart();
        let data = allcart.data;
        console.log(data);
        this.setState({ cart: data });
        console.log(this.state.cart);
    }

    render() {

        let cart = <p> Pour le moment, vous n'avez pas d'inscription en cours...</p>;
        console.log(this.state.cart);
        if (this.state.cart) {
            cart = (
                <div className="Cart">
                <h2>Votre/Vos inscription(s) en cours</h2>
                {this.state.cart.map(item => (
                    <Card className="Card">
                    <Card.Body>
                    <Card.Img src="holder.js/100px180?text=Image cap" />
                        <Card.Title className="TitleCard">{item.total}</Card.Title>
                            <Card.Text>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Type de l'activité</th>
                                            <th>Titre de l'activité</th>
                                            <th>Prix de l'activité</th>
                                            <th>Nbe de place réservée</th>
                                            <th>Prix</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{item.products.item.type}</td>
                                            <td>{item.products.item.title}</td>
                                            <td>{item.products.item.price}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <Dropdown as={ButtonGroup}>
                                                    <Button>Plus</Button>
                                                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                                        <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Inscrire une personne supplémentaire</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Annuler ma/mes inscription(s) en cours</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
            </div>
        )
    }
    return (
        <div >
        {cart}
        </div>
        )
    }
}

export default GetCart;

