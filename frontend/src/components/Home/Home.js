import React, { Component } from "react";
import { GetLastComment } from "../GetLastComment/GetLastComment.js";
import { GetLastUser } from "../GetLastUser/GetLastUser.js";
import { Row, Col, Container} from 'react-bootstrap';

export class Home extends React.Component {
    render() {
      return (
        <div className="App">
            <Container>
            <Row>
            <Col md="9">
            < GetLastComment />
            </Col>
            <Col md="3">
            < GetLastUser />
            </Col>
            </Row>
            </Container>
        </div>
            );
        }
    }

export default Home;
