import React from "react";
import { Button } from "react-bootstrap";

export class Headerbar extends React.Component {

  render() {
    return (
      <header className="Headerbar">
        <div>
          <h1>Titre</h1>
          </div>
          <div className="Navbar">
            <Button className= "Button" href="/">Home</Button>
            <Button className= "Button" href="/login">Login</Button>
            <Button className= "Button" href="/register">Register</Button>
            <Button className= "Button" href="/dashboard">My Space</Button>
        </div>
        <div>
          <p className="HeaderbarIntro">Ecrire une intro</p>
        </div>
      </header>
    );
  }
}
export default Headerbar;
