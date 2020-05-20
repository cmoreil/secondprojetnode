import React from 'react';
import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute.js";
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { Login } from "./components/Login/Login.js";
import { Register } from "./components/Register/Register.js";
import { Home } from "./components/Home/Home.js";
import { Headerbar } from "./components/Headerbar/Headerbar.js";
import { Footerbar } from "./components/Footerbar/Footerbar.js";
import { PaletteGraphique } from "./components/PaletteGraphique/PaletteGraphique.js"
import './App.css';

function App() {
  return (
    <div className="App">
      < Headerbar />
        <div className="App-content">
          <p>Mon potager urbain</p>
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/paletteGraphique" component={PaletteGraphique} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
        </BrowserRouter>
        </div>
      < Footerbar />
      </div>
  );
}

export default App;
