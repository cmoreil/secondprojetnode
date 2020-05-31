import React from "react";
import { Button, FormControl, FormLabel, FormGroup } from "react-bootstrap";
import API from "../../utils/API";
import './Postcomment.css';

export class PostComment extends React.Component {
  state = {
    title: "",
    content:"",
    username: localStorage.getItem("username"),
  };
  send = async () => {
    const { username } = this.state;
    const { title } = this.state;
    const { content } = this.state;
    if (!username || username.length === 0 || username.length > 25) return (alert("Vous avez oublié de compléter votre pseudo ou ce dernier est trop long (max.25 caractères) !"));
    if (!title || title.length === 0 || title.length > 60) return (alert("Vous avez oublié de renseigner un titre ou ce dernier est trop long (max.60 caractères) !"));
    if (!content || content.length === 0 || content.length > 200) return (alert("Vous avez oublié d'écrire un message ou ce dernier est trop long (max.200 caractères) !"));

    try {
      const { data } = await API.postComment({ username, title, content });
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
    const { username, title, content } = this.state;
    return (
      <div className="PostComment">
        <FormGroup controlId="title">
          <FormLabel>Titre</FormLabel>
            <FormControl className="Inputpost"
              autoFocus
              value={title}
              onChange={this.handleChange}
              type="string"
            />
        </FormGroup>
        <FormGroup controlId="content">
          <FormLabel>Mon commentaire du jour</FormLabel>
            <FormControl className="Post"
              autoFocus
              value={content}
              onChange={this.handleChange}
              type="string"
            />
        </FormGroup>
        <Button className="ButtonPost" onClick={this.send} type="submit">Publier !</Button>
      </div>
    );
  }
}