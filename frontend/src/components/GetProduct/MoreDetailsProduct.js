import React from "react";
import { Card } from 'react-bootstrap';
import API from "../../utils/API";
import './MoreDetailsProduct.css';

export class MoreDetailsProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
      }

    async componentDidMount() {
        let productId = this.props.match.params.id;
        let product = await API.getByIdProduct(productId);
        let data = product.data;
        this.setState({ product: data });
    }

    render() {
        let product = <p> No détails available ! </p>;
        console.log(this.state.product)
        if (this.state.product) {
            product = (
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="Card">
                    <Card.Title>{ this.state.product.title }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ this.state.product.type }</Card.Subtitle>
                        <Card.Text>
                        { this.state.product.description }
                        { this.state.product.price } €
                         du { this.state.product.startDate }
                         au { this.state.product.endDate }
                        </Card.Text>
                    <Card.Link className="Link" href="/">Back to home</Card.Link>
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