import React from "react";
import { Button } from "react-bootstrap";
import { PostComment } from "../PostComment/PostComment.js";
import { GetComment } from "../GetComment/GetComment.js";
import Welcome from "./Welcome/Welcome.js";
import API from "../../utils/API";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  }

  render() {
    return (
      <div className="Dashboard">
        <Button className="dashboardButton" onClick={this.disconnect} type="submit">
          Se déconnecter
        </Button>
        < Welcome />
        < PostComment />
        < GetComment />
      </div>
    );
  }
}