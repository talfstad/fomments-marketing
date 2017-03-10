import React from 'react';

const atTheFold = props =>
  <div>
    <div className="app-features-container container-lg">
      <section className="app-features">
        <div className="tablet-portrait">
          <div>
            <img alt="" src="/images/comments.png" />
          </div>
        </div>
      </section>
    </div>
    <section id="primary">
      <div className="white-tilted-bg" />
      <section id="feels-real" className="container-lg">
        <h2>
          <span>
      Looks &amp; works identical to facebook comments
    </span>
          <i className="fa fa-angle-double-right" />

        </h2>
        <p className="common-body-text">
    But doesn&apos;t actually link to Facebook. Create any comments you want,
configure likes, replies, and more. Comments link to real Facebook profiles, and
will work even when a user refreshes the page.

    </p>
      </section>

    </section></div>;

export default atTheFold;
