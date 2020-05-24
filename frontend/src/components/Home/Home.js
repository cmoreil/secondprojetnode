import React from "react";
import { Container} from 'react-bootstrap';
import { GetLastProduct } from "../GetLastProduct/GetLastProduct.js";
import './Home.css';


export class Home extends React.Component {

    render() {
      return (
        <div className="App">
            <Container className="Container">
                <GetLastProduct />
            </Container>
        </div>
            );
        }
    }

export default Home;
