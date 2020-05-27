import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { PostComment } from "../PostComment/PostComment.js";
import { GetLastComment } from "../GetLastComment/GetLastComment.js";
import { GetLastUser } from "../GetLastUser/GetLastUser.js";
import Welcome from "./Welcome/Welcome.js";
import { FaRegEye } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import './Dashboard.css';
import API from "../../utils/API";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  }

  showMyProfil = (id) => {
      this.props.history.push({
        pathname: '/myprofil/' +id,
      })
  }

  render() {
    let userId= localStorage.getItem("userId");
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <div className="Dashboard">
                <Welcome />
                <p><FaRegEye onClick={()=>this.showMyProfil(userId)} size={25} color="#1a936f"/> Mes informations</p>
                <p><IoMdLogOut onClick={this.disconnect} size={25} color="#1a936f"/> Déconnexion</p>
                <p>
                <PostComment/></p>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <GetLastComment />
            </Col>
            <Col xs={6} md={4}>
              <GetLastUser />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
