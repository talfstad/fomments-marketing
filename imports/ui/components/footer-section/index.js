import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="f-footer">
        <div className="container-lg">
          <div className="fl">
            <Link to="/">
              <img
                className="f-logo-footer"
                src="images/fomments-logo-blue.png"
                alt="fomments logo in blue"
              />
            </Link>
            <Link className="footer-link" to="/features">
              <span className="ml10 pr t4">Features</span>
            </Link>
          </div>
          <div className="fr">
            <Link className="footer-link" to="/terms-of-use">
              <span className="uppercase mr20">terms of use</span>
            </Link>
            <Link className="footer-link" to="/privacy-policy">
              <span className="uppercase mr20">privacy policy</span>
            </Link>
            <Link className="footer-link" to="/contact">
              <span className="uppercase">contact</span>
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;