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
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div>
            <Slider {...settings}>
            {this.state.products.map(product => (
                <h3>
                    <ul>
                        <li className="CartelGetLastProduct" key= {product.title}> <p>{product.title} </p>
                        <p> {product.description} </p>
                        <p> {product.price} </p>
                        <p> {product.startdate} {product.endDate} </p>
                        </li>
                    </ul>
                </h3>
                ))}
            </Slider>
            </div>
        )
    }
}

export default GetLastProduct;