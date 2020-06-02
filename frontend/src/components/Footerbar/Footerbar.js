import React from "react";
import ContactDialog from '../Dialog/ContactDialog.js'
import './Footerbar.css';


export class Footerbar extends React.Component {

    render() {
        return (
          <div className="Footerbar">
              <p>Tous droits réservés à <em>Mon potager urbain</em></p>
              <ContactDialog />
          </div>
      );
      }
    }

export default Footerbar;
