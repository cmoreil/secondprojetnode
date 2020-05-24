import React from "react";
import {Button, FormGroup, FormControl, FormLabel} from "../../../node_modules/react-bootstrap";
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
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.register({ email, password, username });
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username", data.username);
      localStorage.setItem("admin", data.admin);
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
        <FormGroup controlId="username" bsSize="normal">
          <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              value={username}
              onChange={this.handleChange}
              type="string"
            />
        </FormGroup>
        <FormGroup controlId="email" bsSize="normal">
          <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup controlId="password" bsSize="normal">
          <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={this.handleChange}
              type="password"
            />
        </FormGroup>
        <FormGroup controlId="cpassword" bsSize="normal">
          <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={cpassword}
              onChange={this.handleChange}
              type="password"
            />
        </FormGroup>

        <Button className="Button" onClick={this.send} block bsSize="normal" type="submit">
          Submit
        </Button>
      </div>
    );
  }
}

export default Register;