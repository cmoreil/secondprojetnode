import React from "react";
import { Card } from 'react-bootstrap';
import API from "../../utils/API";
import './GetByNameComment.css';

export class GetByNameComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : null
        };
      }

      async componentDidMount() {
        let username = this.props.username;
        let comments= await API.getByNameComment(username);
        let data = comments.data;
        console.log(data);
        this.setState({ comments: data });
        console.log(this.state.comments);
        }

        showMyComments = (username) => {
            this.props.history.push({
              pathname: '/dashboard'/ +username,
            })
        }

    render() {
        let comments = <p> A ce jour, vous n'avez jamais posté de commentaire. </p>;
        if (this.state.comments) {
            comments = (
                <div className="AllSection">
                <h2>Mon fil de commentaires</h2>
                {this.state.comments.map(comment => (
                    <Card className="Card">
                    <Card.Body>
                        <Card.Title className="TitleCard">{comment.title}</Card.Title>
                            <Card.Text>
                                <p className="FontCard">{this.props.username}</p>
                                <p className="FontCard"> {comment.content} </p>
                                <p className="FontCard"> {comment.created_at} </p>
                            </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
            </div>
        )
    }
    return (
        <div >
        {comments}
        </div>
        )
    }
}

export default GetByNameComment;
