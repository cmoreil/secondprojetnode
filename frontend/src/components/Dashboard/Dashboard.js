import React from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

export class Dashboard extends React.Component {
  state = {
    loading: true,
    allComment: [],
    bodyPostComment: "",
    username: localStorage.getItem("username"),
    editPost:""
  }
  username = localStorage.getItem("username");
  disconnect = () => {
    API.logout();
    window.location = "/login";
  };
  postComment = async() => {
    const { bodyPostComment } = this.state;
    const { username } = this.state;
    if(!bodyPostComment || bodyPostComment.length === 0) return;
    try {
      const { data } = await API.postComment({ bodyPostComment, username });
      console.log("Comment send");
      window.location = "/dashboard";
    } catch (error) {
      console.error("erreur envoi to backend" + error);
    }
  };

  async componentDidMount(){
    const response = await API.getComment();
    const data = response.data;
    const sortedData = {"comment": data.comment.sort(function(a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a>b ? -1 : a<b ? 1 : 0;
    })}
    this.setState({ allComment: sortedData.comment, loading: false });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  editButton = (postUsername, oldBody, postId)=>{
    if(localStorage.getItem("username").localeCompare(postUsername) === 0)
    {

      return (
        <div className="gridContainer">
          <Button onClick={() => this.setState({editPost:postId})} type="button" className="gridItem" type="submit" >Editer</Button>
          <Button onClick={()=> this.deletePost(oldBody)} type="button" className="gridItem" type="submit">Supprimer</Button>
        </div>
      );
    }
  };
  editComment(oldBody){
    return(
    <div className="form-group" style={{maxWidth: 30 +"em",  margin: "auto", marginTop: 30+"px"}}>
    <textarea className="form-control" id="bodyEditMessage" name="bodyEditMessage" rows="3" value={ oldBody }></textarea>
    <Button type="button" className="btn btn-primary" type="submit">
      Envoyer votre message
    </Button>
  </div>)
  }

  render() {
    const { bodyPostComment } = this.state;
    return (
      <div className="Dashboard">
        <div>Tableau de bord</div>
        <div>Welcome {this.username} !</div>
    <div> Tweet du jour !
      {this.printComment}
    </div>
        <Button onClick={this.disconnect} block bsSize="lg" type="submit">
          Se déconnecter
        </Button>
        <h1>Dashboard</h1>
        <div>Welcome {this.username} !
        </div>
        {/* postcomment */}
        <div className="form-group" style={{maxWidth: 30 +"em",  margin: "auto", marginTop: 30+"px"}}>
        <label>Exprimez Vous !</label>
          <textarea className="form-control" id="bodyPostComment" name="bodyPostComment" rows="3" value={ bodyPostComment } onChange={this.handleChange}></textarea>
          <Button onClick={this.postComment} type="button" className="btn btn-primary" type="submit">
            Send !
          </Button>
        </div>

        {/* print All comment */}
        <div> Tweet du jour !
          <div>

            {this.state.allComment.map(comment => (
              <div>
                <div>{comment.content}</div>
                  <p>
                    Par {comment.username}, le "{comment.date}"
                  </p>
                  {this.editButton(comment.username, comment.content, comment._id)}
                  {this.editPost === comment._id}
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  }
}