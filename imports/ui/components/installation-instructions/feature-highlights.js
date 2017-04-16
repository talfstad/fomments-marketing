import React from 'react';

const FeatureHighlights = (props) => {
  const { section } = props;

  return (
    <div className="row info-box">
      <div className="col-sm-1 table-cell lock-box">
        <i className="fa fa-unlock" />
      </div>
      <div className="col-sm-11 table-cell purchase-content">
        <p>
          <span className="flag-icon flag-icon-us" />
          <span className="capitialize"> {section.vertical} </span>
          {section.name} in
          <span className="capitialize"> {section.language}</span>
        </p>
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
