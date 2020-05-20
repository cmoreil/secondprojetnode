import React, { Component } from "react";
import API from "../../utils/API";

export class getProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
      }

    async componentDidMount() {
        let allProducts = await API.getProduct();
        let data = allProducts.data;
        this.setState({ products: data.product, loading:false});
    }

    render() {
        return (
                <div>
                    {this.state.products.map(product => (
                        <ul>
                        <li className="CartelGetProduct" key= {product.title}> <h2>{product.title} </h2>
                        <p> {product.desciption} </p>
                        <p> {product.price} </p>
                        <p> {product.startDate} {product.endDate} </p></li>
                        </ul>
                    ))}
                </div>
        )
    }
}

export default getProduct;
