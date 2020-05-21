import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import API from "../../utils/API";


export class GetLastComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            recomments: []
        };
      }

    async componentDidMount() {
        let allComments = await API.getLastComment();
        let data = allComments.data;
        this.setState({ comments: data.comment, loading:false});
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
            {this.state.comments.map(comment => (
                <h3>
                    <ul>
                    <li key= {comment.title}> <h2>{comment.title}, par {comment.username} </h2>
                        <p> {comment.content} </p>
                        <p> {comment.created_at} </p>
                        </li>
                    </ul>
                </h3>
                ))}
            </Slider>
            </div>
        )
    }
}

export default GetLastComment;
