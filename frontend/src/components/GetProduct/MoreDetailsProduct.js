import React from "react";
import { Card, Button } from 'react-bootstrap';
import API from "../../utils/API";
import './MoreDetailsProduct.css';

export class MoreDetailsProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            productId : ""
        };
      }

    async componentDidMount() {
        let productId = this.props.match.params.id;
        this.setState({productId: productId})
        let product = await API.getByIdProduct(productId);
        let data = product.data;
        this.setState({ product: data });
    }

    addToCart = async () => {
        let response = await API.addToCart(this.state.productId);
        this.props.history.push('/getCart');
    }

    render() {
        let product = <p> Pas détail disponible ! </p>;
        if (this.state.product) {
            product = (
                <Card>
                    <Card.Body className="Card">
                    <Card.Title><h1 className="Titremoredetails">{ this.state.product.title }</h1></Card.Title>
                        <Card.Subtitle className="Soustitre"><h2>{ this.state.product.type }</h2></Card.Subtitle>
                        <Card.Text className="Text">
                        <p>{ this.state.product.description }</p>
                        <p>{ this.state.product.price } €</p>
                        <p>du { this.state.product.startDate }</p>
                        <p>au { this.state.product.endDate }</p>
                        <p>Nombre de places disponibles: { this.state.product.availableQty }</p>
                        </Card.Text>
                        <Button className="ButtonCard" onClick={this.addToCart} block bsSize="normal" type="submit">S'inscrire</Button>
                    </Card.Body>
                </Card>
            )
        }
        return (
            <div>
                {product}
            </div>
        )
    }
}
export default MoreDetailsProduct;