import React from "react";

function Welcome(){

    let username = localStorage.getItem("username");
    return (
        <div> Bienvenu {username} !</div>
    )
}

export default Welcome;