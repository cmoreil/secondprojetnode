import React from "react";
import axios from "axios";
import { Form, Button, FormControl, FormLabel, FormGroup } from "react-bootstrap";
import './Contact.css';

    export class Contact extends React.Component  {
        constructor(props) {
            super(props);
                this.state = {
                email: '',
                message: ''
            }
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST",
          url:"http://localhost:3002/send",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent.");
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }

    resetForm(){
    this.setState({email: '', message: ''})
    }

    render() {
        return(
            <div className="Contact">
                <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <FormGroup controlId="email">
                        <FormLabel>Votre Email :</FormLabel>
                        <FormControl className="InputEmail"
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                        />
                    </FormGroup>
                    <FormGroup controlId="message">
                        <FormLabel>Votre question / votre message :</FormLabel>
                        <FormControl className="InputMessage"
                        autoFocus
                        value={this.state.message}
                        onChange={this.onMessageChange.bind(this)}
                        type="string"
                        />
                    </FormGroup>
                    <Button className="ButtonPost" onClick={this.send} type="submit">Envoyer!</Button>
                </Form>
            </div>
        )
    }

    onEmailChange(event) {
    this.setState({email: event.target.value})
    }

    onMessageChange(event) {
    this.setState({message: event.target.value})
    }

    handleSubmit(event) {
    }
}
