import React from "react";
import { Card } from 'react-bootstrap';
import API from "../../utils/API";
import ComDialog from "../Dialog/ComDialog.js";
import './Get50LastComment.css';

export class Get50LastComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            recomments: []
        };
      }

    async componentDidMount() {
        let allComments = await API.get50LastComment();
        let data = allComments.data;
        this.setState({ comments: data.comment, loading:false});
    }

    render() {
        return (
            <div className="AllSection">
            <h2>Fil d'actualité de la communauté</h2>
            {this.state.comments.map(comment => (
                <Card className="Card">
                    <Card.Body>
                        <Card.Title className="TitleCard">{comment.title}</Card.Title>
                            <Card.Text>
                                <p className="FontCardtitle">par {comment.username}</p>
                                <p className="FontCard"> {comment.content} </p>
                                <p className="FontCard"> {comment.created_at} </p>
                                <p className="Comdialog"><ComDialog id={comment._id}/></p>
                            </Card.Text>
                    </Card.Body>
                  </Card>
                  ))}
            </div>
        )
    }
}

export default Get50LastComment;