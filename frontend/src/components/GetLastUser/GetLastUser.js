import React from "react";
import { DiCoda } from "react-icons/di";
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
                <h1>Derniers inscrits</h1>
                <DiCoda color="#1a936f" size={18}/><DiCoda color="#1a936f" size={18}/><DiCoda color="#1a936f" size={18}/>
                {this.state.users.map(user => (
                    <ul key= {user._id}>
                        <li><h2 className="username">{user.username},</h2></li>
                        <li>le {user.created_at}</li>
                    </ul>
                ))}
            </div>
        )
    }
}

export default GetLastUser;
