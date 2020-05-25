import React from "react";
import API from "../../utils/API";
import './GetLastUser.css';

export class GetLastUser extends React.Component {
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
        return (
            <div className="CartelLastUser">
                <h1>Last registered</h1>
                {this.state.users.map(user => (
                <h3>
                        <ul key= {user._id}>
                        <li>{user.username},</li>
                        <li>le {user.created_at}</li>
                        </ul>
                </h3>
                ))}
            </div>
        )
    }
}

export default GetLastUser;
