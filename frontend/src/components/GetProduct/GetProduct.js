import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import API from "../../utils/API";

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

    render() {
        console.log(this.state.products);
        let settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <div>
                <Slider {...settings}>
                    {this.state.products.map(product => (
                        <h3>
                            <ul className="cartelGetproduct">
                            <li key= {product._id}> <h2>{product.type} : {product.title}</h2>
                            <p> { product.description} </p>
                            <p> {product.price} € </p>
                            <p> du {product.startDate} au {product.enddate} </p></li>
                            </ul>
                        </h3>
                        ))}
            </Slider>
            </div>
        )
    }
}
export default GetProduct;
