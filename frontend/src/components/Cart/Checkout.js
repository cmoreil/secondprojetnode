import React from "react";
import API from "../../utils/API";
import './Checkout.css';

export class Checkout extends React.Component {
      state = {
        products: [],
        user: {
            lastname: "",
            firstname: "",
            adress: "",
            email: "",
            phone: ""
        }
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
          <div className="Order">
            <FormGroup controlId="lastname" >
              <FormLabel>Votre nom </FormLabel>
                <FormControl className="Input"
                  autoFocus
                  value={lastname}
                  onChange={this.handleChange}
                  type="string"
                />
            </FormGroup>
            <FormGroup controlId="firstname" >
              <FormLabel>Votre prénom </FormLabel>
                <FormControl className="Input"
                  autoFocus
                  value={firstname}
                  onChange={this.handleChange}
                  type="string"
                />
            </FormGroup>
            <FormGroup controlId="adress" >
              <FormLabel>Votre adresse</FormLabel>
                <FormControl className="Input"
                  value={adress}
                  onChange={this.handleChange}
                  type="string"
                />
            </FormGroup>
            <FormGroup controlId="email" >
              <FormLabel>Votre email</FormLabel>
                <FormControl className="Input"
                  autoFocus
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="phone" >
              <FormLabel>Votre numéro de téléphone</FormLabel>
                <FormControl className="Input"
                  value={phone}
                  onChange={this.handleChange}
                  type="string"
                />
            </FormGroup>
            <FormGroup controlId="creditcart" >
              <FormLabel>Votre numéro de carte bancaire</FormLabel>
                <FormControl className="Input"
                  value={creditcart}
                  onChange={this.handleChange}
                  type="string"
                />
            </FormGroup>
            <Button className="ButtonRegister" onClick={this.send} block  type="submit">Envoyer et payer</Button>
          </div>
        );
      }
    }

export default Checkout;