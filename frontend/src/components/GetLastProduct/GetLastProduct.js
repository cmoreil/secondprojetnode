import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import API from "../../utils/API";


export class GetLastProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
      }

    async componentDidMount() {
        let allProducts = await API.getLastProduct();
        let data = allProducts.data;
        this.setState({ products: data.product, loading:false});
    }

    render() {
        console.log(this.state.products);
        let settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div>
            <Slider {...settings}>
            {this.state.products.map(product => (
                <h3>
                    <ul className="cartelGetlastproduct">
                    <li key= {product._id}> <h2>{product.type} : {product.title}</h2>
                    <p> du {product.startDate} au {product.endDate} </p>
                    <p> {product.price} €</p></li>
                    </ul>
                </h3>
                ))}
            </Slider>
            </div>
        )
    }
}

export default GetLastProduct;