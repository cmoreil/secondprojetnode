import React, { Component } from "react";
import API from "../../utils/API";

export class GetComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            recomments: []
        };
      }

    async componentDidMount() {
        let allComments = await API.getComment();
        let data = allComments.data;
        this.setState({ comments: data.comment, loading:false});
    }

    render() {
        return (
                <div>
                    {this.state.comments.map(comment => (
                        <ul>
                        <li className="CartelGetComment" key= {comment.title}> <h2>{comment.title}, par {comment.username} </h2>
                        <p> {comment.content} </p></li>
                        </ul>
                    ))}
                </div>
        )
    }
}
export default GetComment;
