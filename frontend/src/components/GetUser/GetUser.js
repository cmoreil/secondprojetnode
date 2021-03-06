import React, {Component} from "react";
import API from "../../utils/API";

export class Getuser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
      }

    async componentDidMount() {
        let allUsers = await API.getuser();
        let data = allUsers.data;
        this.setState({ users: data.user, loading:false});
        console.log(data.user);
        }

        showMyProfil = (id) => {
            this.props.history.push({
              pathname: '/myprofil/' +id,
            })
        }

    render() {
        return (
            <div className="CartelUser">
            {this.state.users.map(user => (
                <ul key= {user._id}> {user.username}
                <p>le {user.created_at}</p>
                <button className="Button" onClick={()=>this.showMyProfil(user._id)}>Mes informations</button>
                </ul>
                ))}
            </div>
        )
    }
}
export default Getuser;
