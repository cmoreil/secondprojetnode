import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { GetLastComment } from "../GetLastComment/GetLastComment.js"; //ne pas retirer car fait bugger le caroussel ?!
import { Get50LastComment } from "../GetLastComment/Get50LastComment.js";
import { GetLastUserCaroussel } from "../GetLastUser/GetLastUserCaroussel.js";
import { GetByNameComment} from "../GetComment/GetByNameComment.js";
import Welcome from "./Welcome/Welcome.js";
import { FaRegEye } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import FormDialog from "../Dialog/FormDialog.js"
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
    let username= localStorage.getItem("username");
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div className="Dashboard">
                  <Welcome />
              </div>
            </Col>
            <Col xs={6} md={4} className="IconesDash">
              <FaRegEye onClick={()=>this.showMyProfil(userId)} size={25} color="#1a936f"/> Mes informations
              <IoMdLogOut onClick={this.disconnect} size={25} color="#1a936f"/> Déconnexion
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Get50LastComment />
            </Col>
            <Col xs={6} className="LinkDialog">
              <div className="Getbyname"><GetByNameComment username={username}/></div>
              <div className="Dialog"><FormDialog /></div>
            </Col>
          </Row>
          <Row>
            <Col><div className="Getlastusercaroussel"><GetLastUserCaroussel /></div></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
