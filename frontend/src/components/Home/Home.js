import React from "react";
import { Container} from 'react-bootstrap';
import { GetProduct } from "../GetProduct/GetProduct.js";
import './Home.css';


export class Home extends React.Component {

    render() {
      return (
        <div className="App">
            <Container className="Container">
                <GetProduct {...this.props } />
            </Container>
        </div>
            );
        }
    }

export default Home;
