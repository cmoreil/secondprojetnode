import React from "react";
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';
import { PostComment } from "../PostComment/PostComment.js";
import { GetLastComment } from "../GetLastComment/GetLastComment.js";
import { GetLastUser } from "../GetLastUser/GetLastUser.js";
import Welcome from "./Welcome/Welcome.js";
import './Dashboard.css';
import API from "../../utils/API";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={9}>
              <div>
              <Button className="Button" onClick={this.disconnect} type="submit">
              Sign out
              </Button></div>
              <div className="Dashboard">
              <Welcome />
              <PostComment/>
              </div>
              <div>
              <GetLastComment />
              </div>
            </Col>
            <Col md={3}>
              <GetLastUser />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
