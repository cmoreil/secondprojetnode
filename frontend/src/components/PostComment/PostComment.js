import React from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

export class PostComment extends React.Component {
  state = {
    loading: true,
    title: "",
    content:"",
    username: localStorage.getItem("username"),
  };
  send = async () => {
    const { title, content, username } = this.state;
    if (!title || title.length === 0 || title.length > 60) return;
    if (!content || content.length === 0 || content.lenth > 140) return;

    try {
      const { data } = await API.postComment({ title, content, username });
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
    const { title, content, username } = this.state;
    return (

      <div className="PostComment">
        <label>Title</label>
        <textarea className="textArea" id="title" name="title" rows="1" value={ title } onChange={this.handleChange}></textarea>
        <label>Your comment</label>
        <textarea className="textArea" id="content" name="content" rows="1" value={ content } onChange={this.handleChange}></textarea>

        <Button onClick={this.send} block bsSize="normal" type="submit">Publish !</Button>
      </div>
    );
  }
}