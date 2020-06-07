import React from "react";
import { Button, FormControl, FormLabel, FormGroup } from "react-bootstrap";
import API from "../../utils/API";
import './Contact.css';

    export class Contact extends React.Component  {
        constructor(props) {
            super(props);
                this.state = {
                email: "",
                message: ""
            }
    }
    send = async () => {
        const { email } = this.state;
        const { message } = this.state;
        if (!email) return (alert("Vous avez oublié de compléter votre email !"));
        if (!message || message.length === 0 || message.length > 2000) return (alert("Votre message doit contenir entre 1 et 2000 caractères, merci"));


        try {
          const { data } = await API.postContact({ email, message });
          window.location = "/";
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
        const { email, message } = this.state;
        return(
            <div className="Contact">
                <FormGroup controlId="email">
                    <FormLabel>Votre Email :</FormLabel>
                    <FormControl className="InputEmail"
                        autoFocus
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="message">
                    <FormLabel>Mon commentaire du jour</FormLabel>
                        <FormControl className="InputMessage"
                        autoFocus
                        value={message}
                        onChange={this.handleChange}
                        type="string"
                        />
                </FormGroup>
                <Button className="ButtonPost" onClick={this.send} type="submit">Envoyer!</Button>
            </div>
        )
    }
}
