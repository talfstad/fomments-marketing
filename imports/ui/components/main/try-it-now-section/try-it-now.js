import React from 'react';
import { Link } from 'react-router-dom';

const TryItNow = () => (
  <section className="try-it-now-section">
    <section className="container-lg">
      <div className="f-container full-width clearfix">
        <div className="action-text">
          <h2>
            <strong>Ready to give it a try? </strong>
            <span> Join our free early registration &amp; enjoy full access.</span>
          </h2>
        </div>
        <div className="action-buttons">
          <Link to="/signup">
            <button className="f-action-button green mr10">
              Test it out now
            </button>
          </Link>
          <button className="f-action-button">Find out more</button>
        </div>
      </div>
    </section>
  </section>
);

export default TryItNow;
