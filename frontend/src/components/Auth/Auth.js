import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Login } from "../Login/Login.js";
import { Register } from "../Register/Register.js";
import './Auth.css';
import API from "../../utils/API";

export class Auth extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  }

  render() {
    return (
      <div>
        <Container className="Auth">
          <Row>
            <Col md={6}>
              <div >
              <h3 className="Titreauth">Déjà inscrit ?</h3>
              <Login className="Login"/>
              </div>
            </Col>
            <Col md={6}>
              <div>
              <h3 className="Titreauth">Sinon, rejoignez-nous !</h3>
              <Register className="Register" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
