import React from 'react';

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
        </div>
      </div>
    </div>
  );
};


export default FeatureHighlights;
