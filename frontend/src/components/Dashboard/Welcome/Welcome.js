import React from "react";
import './Welcome.css';

function Welcome(){

    let username = localStorage.getItem("username");
    return (
        <div> <h1>Bienvenu {username} !</h1></div>
    )
}

export default Welcome;