import React, { PropTypes } from 'react';

const FeatureHighlights = (props) => {
  const { section } = props;

  return (
    <div className="row info-box">
      <div className="col-sm-12 table-cell">
        <div className="purchase-feature-list">
          <p>
            <i className="fa fa-check" /> Use on all of your landing pages
          </p>
          <p>
            <i className="fa fa-check" /> Customize product name on the fly
          </p>
          {section.language !== 'english' ?
            <p>
              <i className="fa fa-check" /> Professionally translated
            </p>
          :
            <noscript />}
        </div>
      </div>
    </div>
  );
};

FeatureHighlights.propTypes = {
  section: PropTypes.shape({}),
};

export default FeatureHighlights;
