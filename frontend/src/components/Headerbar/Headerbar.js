import React from "react";
import { Navbar } from 'react-bootstrap';
import { FaSeedling } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
import { Searchbar } from "../Searchbar/Searchbar.js";
import './Headerbar.css';

export class Headerbar extends React.Component {

  render() {
    return (
      <div className="Background">
        <header>
        <div className="Icones">
          <br></br>
              <div><FaSeedling className="Semis" color="#1a936f" size={50}/></div>
              <Navbar.Brand className="Titre" href="/">Mon potager urbain</Navbar.Brand>
              <div><FaHands color="#82735c" size={60}/></div>
        </div>
        <div className="Searchbar">
          <Searchbar />
        </div>
        <div>
            <ul className="Ulheader">
              <li><a href="/">Home</a></li>
              <li><a href="/about">A propos de nous</a></li>
              <li><a href="/login">Mon compte</a></li>
              <li><a href="/dashboard">Mon espace</a></li>
              <li><a href="/getcart"><span>Réservation(s) en cours</span></a></li>
            </ul>
        </div>
        </header>
      </div>
    );
  }
}
export default Headerbar;
