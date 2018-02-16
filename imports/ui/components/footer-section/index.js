import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="f-footer">
    <div className="container-lg">
      <div className="fl">
        <Link to="/">
          <object
            aria-label="Fomments"
            className="fomments-logo f-logo-footer"
            data="/images/fomments-logo-blue-1.svg"
            type="image/svg+xml"
          />
        </Link>
      </div>
      <div className="fl ml20">
        <Link
          to={{
            pathname: '/operation-agreements',
            state: { tab: 'privacy-protection' },
          }}
          className="footer-link"
        >
          <span className="uppercase mr20">Privacy Protection</span>
        </Link>
        <Link
          to={{
            pathname: '/operation-agreements',
            state: { tab: 'expectations-of-use' },
          }}
          className="footer-link"
        >
          <span className="uppercase mr20">Expectations of Use</span>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
