import React from "react";
import {Button, FormGroup, FormControl, FormLabel} from "../../../node_modules/react-bootstrap";
import API from "../../utils/API";
import './Login.css';

export class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  send = async () => {
    const { email, password } = this.state;
    if (!email || email.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }
    try {
      const { data } = await API.login(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username", data.username);
      localStorage.setItem("admin", data.admin);
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl className="Input"
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Mot de passe</FormLabel>
          <FormControl className="Input"
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button className="Button" onClick={this.send} block type="submit">
          Connexion
        </Button>
      </div>
    );
  }
}

export default Login;