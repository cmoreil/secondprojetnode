import React from 'react';
import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute.js";
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { Auth } from "./components/Auth/Auth.js";
import { Home } from "./components/Home/Home.js";
import { Headerbar } from "./components/Headerbar/Headerbar.js";
import { Footerbar } from "./components/Footerbar/Footerbar.js";
import { PaletteGraphique } from "./components/PaletteGraphique/PaletteGraphique.js";
import { MoreDetailsProduct } from "./components/GetProduct/MoreDetailsProduct.js";
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Headerbar/>
            <div className="App-container">
              <Route exact path="/" component={Home} />
              <Route exact path="/paletteGraphique" component={PaletteGraphique} />
              <Route exact path="/login" component={Auth} />
              <Route exact path="/register" component={Auth} />
              <Route exact path="/moredetailsproduct/:id" component={MoreDetailsProduct} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </div>
        </BrowserRouter>
        <Footerbar />
      </div>
  );
}

export default App;
