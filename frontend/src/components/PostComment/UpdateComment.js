import React from "react";
import { Button , FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import API from "../../utils/API";

export class UpdateComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recomments: {
                name:"",
                body:""
            }
        };
      }

    //ici, nous devons modifier un ou des éléments du profil existant
    update = async () => {
        let commentId = this.props.id;
        //const { recomments } = this.state;
        try {
            const { data } = await API.updateComment(commentId, { recomments: this.state.recomments });
        } catch (error) {
            console.error(error);
    }
    };
    handleChange = (event) => {
        const updatedRecomments = {...this.state.recomments};
        updatedRecomments[event.target.id] = event.target.value;
        this.setState({
            recomments: updatedRecomments
        });
    };

    render() {
        console.log(this.state.recomments);
        return (
                <div>
                    <FormGroup controlId="name">
                        <FormLabel>Mon pseudo</FormLabel>
                            <FormControl
                                autoFocus
                                value={this.state.recomments.name}
                                onChange={this.handleChange}
                                type="string"
                            />
                    </FormGroup>
                    <FormGroup controlId="body">
                        <FormLabel>Mon commentaire</FormLabel>
                            <FormControl className="Post"
                                autoFocus
                                value={this.state.recomments.body}
                                onChange={this.handleChange}
                                type="string"
                            />
                    </FormGroup>
                    <Button className="ButtonPost" onClick={this.update} type="submit">Envoyer !</Button>
                </div>
        )
    }
}
export default UpdateComment;
