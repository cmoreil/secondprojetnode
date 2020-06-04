import React, {Component} from "react";
import './PaletteGraphique.css';
import { FaHands } from "react-icons/fa";
import { DiCoda } from "react-icons/di";
import { FaSeedling } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import {FaClipboardCheck } from "react-icons/fa";

export class PaletteGraphique extends Component {
  render() {
    return (
          <div className="Fond">
            <div>
              <h3> <FaHands color="#4b3b40" size={54}/> <DiCoda color="#1a936f" size={96}/> <FaSeedling color="#1a936f" size={96}/> <FaCarrot color="orange" size={96}/> <FaHandHolding color="#82735c" size={96}/></h3>
            </div>
            <div>
              <p className="Testtitre">Mon potager urbain</p>
              <p className= "test5"> blabla</p>
              <p className= "test6"> blabla</p>
                <p className= "test7"> blabla</p>
                <p className= "test8"> blabla</p>
                <p className= "test9"> blabla</p>
                <p className= "test10"> blabla</p>
              </div>
              <div><FaCartArrowDown /> <FaCartPlus /> <FaClipboardCheck /></div>
          </div>
    );
  }
}