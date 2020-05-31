import React from "react";
import Slider from "react-slick";
import { DiCoda } from "react-icons/di";
import API from "../../utils/API";
import './GetLastUserCaroussel.css';

export class GetLastUserCaroussel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
      }

    async componentDidMount() {
        let allUsers = await API.getLastUser();
        let data = allUsers.data;
        this.setState({ users: data.user, loading:false});
        console.log(data.user);
        }

    render() {

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
                {this.state.users.map(user => (
                    <div>
                        <ul key= {user._id}><h1>Derniers inscrits</h1><DiCoda color="#1a936f" size={18}/><DiCoda color="#1a936f" size={18}/><DiCoda color="#1a936f" size={18}/>
                            <li><h2 className="username">{user.username},</h2></li>
                            <li>le {user.created_at}</li>
                            </ul>
                    </div>
                    ))}
            </Slider>
            </div>
        )
    }
}

export default GetLastUserCaroussel;
