import React from "react";
import API from "../../utils/API";
import './GetProduct.css';
import { FaCarrot } from "react-icons/fa";

export class GetProduct extends React.Component {
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
                    <p> du {product.startDate} au {product.enddate} </p>
                    <button className="Button" onClick={()=>this.showProductDetails(product._id)}>MoreDetails</button>
                    </li>
                    </ul>
                   ))}
            </div>
        )
    }
}
export default GetProduct;
