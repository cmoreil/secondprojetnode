import React from "react";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import API from "../../utils/API";
import './Register.css';

export class Register extends React.Component {
  state = {
    email: "",
    password: "",
    cpassword: "",
    username: ""
  };
  send = async () => {
    const { email, password, cpassword, username } = this.state;
    if (!email || email.length === 0) return (alert("Vous avez oublié de compléter votre email !"));
    if (!password || password.length === 0 || password !== cpassword) return (alert("Vous avez oublié de compléter votre mot de passe ou votre votre de passe et votre confirmation sont différentes !"));
    try {
      const { data } = await API.register({ email, password, username });
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
    const { email, password, cpassword, username } = this.state;
    return (
      <div className="Register">
        <FormGroup controlId="username" >
          <FormLabel>Pseudo</FormLabel>
            <FormControl className="Input"
              autoFocus
              value={username}
              onChange={this.handleChange}
              type="string"
            />
        </FormGroup>
        <FormGroup controlId="email" >
          <FormLabel>Email</FormLabel>
            <FormControl className="Input"
              autoFocus
              type="email"
              value={email}
              onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup controlId="password" >
          <FormLabel>Mot de passe</FormLabel>
            <FormControl className="Input"
              placeholder="votre mot de passe"
              value={password}
              onChange={this.handleChange}
              type="password"
            />
        </FormGroup>
        <FormGroup controlId="cpassword" >
          <FormLabel>Confirmation</FormLabel>
            <FormControl className="Input"
              placeholder="de nouveau : votre mot de passe"
              value={cpassword}
              onChange={this.handleChange}
              type="password"
            />
        </FormGroup>

        <Button className="Button" onClick={this.send} block  type="submit">
          S'inscrire
        </Button>
      </div>
    );
  }
}

export default Register;