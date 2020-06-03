import React from "react";
import API from "../../utils/API";
import {Button} from "react-bootstrap";
import './GetProduct.css';
import { FaCarrot } from "react-icons/fa";

export class GetSeminaries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
      }

    async componentDidMount() {
        let allProducts = await API.getSeminaries();
        let data = allProducts.data;
        this.setState({ products: data });
    }

    showProductDetails = (id) => {
      this.props.history.push({
        pathname: '/moredetailsproduct/' +id,
      })
    }

    render() {
        return (
            <div>
                {this.state.products.map(product => (
                    <ul className="cartelGetproduct">
                        <li key= {product._id}> <FaCarrot color="orange" size={20}/> <FaCarrot color="orange" size={15}/><FaCarrot color="orange" size={10}/>
                            <h2 className="Soustitre">{product.type}</h2>
                                <h3 className="Soussoustitre">{product.title}</h3>
                                <p> { product.description} </p>
                                <p> {product.price} € </p>
                                <p> du {product.startDate} au {product.endDate} </p>
                            <Button className="Button" onClick={()=>this.showProductDetails(product._id)}>Plus de détails</Button>
                            <Button className="Button" onClick>Inscription</Button>
                        </li>
                    </ul>
                   ))}
            </div>
        )
    }
}
export default GetSeminaries;
