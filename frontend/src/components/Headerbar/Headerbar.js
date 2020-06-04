import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { FaSeedling } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import './Headerbar.css';

export class Headerbar extends React.Component {

  render() {
    return (
      <div className="Background">
        <header>
          <div>
          <Nav defaultActiveKey="/" as="ul">
            <Navbar bg="light" variant="light">
              <Nav>
                <Nav.Link className="Navlink" href="/">Home</Nav.Link>
                <Nav.Link className="Navlink" href="/about">A propos de nous</Nav.Link>
                <Nav.Link className="Navlink" href="/login">Se connecter / S'inscrire</Nav.Link>
                <Nav.Link className="Navlink" href="/dashboard">Mon espace</Nav.Link>
                <FaClipboardCheck href="#" color="orange" size={20}/><span className="Badge">5 réservation(s)</span>
              </Nav>
              </Navbar>
            </Nav>
          </div>
            <div className="Icones">
              <div><FaSeedling className="Semis" color="#1a936f" size={60}/></div>
              <Navbar.Brand className="Titre" href="/">Mon potager urbain</Navbar.Brand>
              <div><FaHands color="#82735c" size={70}/></div>
            </div>
        </header>
      </div>
    );
  }
}
export default Headerbar;
