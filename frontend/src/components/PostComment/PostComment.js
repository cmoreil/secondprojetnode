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
    if (!title || title.length === 0 || title.length > 60) return;
    if (!content || content.length === 0 || content.lenth > 140) return;

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
        <FormGroup controlId="title" bsSize="normal">
          <FormLabel>Title</FormLabel>
            <FormControl className="Inputpost"
              autoFocus
              value={title}
              onChange={this.handleChange}
              type="string"
            />
        </FormGroup>
        <FormGroup controlId="content" bsSize="normal">
          <FormLabel>Your Comment</FormLabel>
            <FormControl className="Post"
              autoFocus
              value={content}
              onChange={this.handleChange}
              type="string"
            />
        </FormGroup>

        <Button className="Button" onClick={this.send} block bsSize="normal" type="submit">Publish !</Button>
      </div>
    );
  }
}