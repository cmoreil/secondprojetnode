import React, { Component } from "react";
import { GetLastUser } from "../GetLastUser/GetLastUser.js";
import { GetLastProduct } from "../GetLastProduct/GetLastProduct.js";
import { Row, Col, Container} from 'react-bootstrap';

export class Home extends React.Component {

    render() {
      return (
        <div className="App">
            <Container>
                <Row>
                    <Col md="6">
                    < GetLastProduct />
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
