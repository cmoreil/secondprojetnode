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

    render() {
        return (
            <div className="CartelUser">
            {this.state.users.map(user => (
                <ul key= {user.username}> {user.username}
                <p>le {user.created_at}</p>
                </ul>
                ))}
            </div>
        )
    }
}
export default Getuser;
