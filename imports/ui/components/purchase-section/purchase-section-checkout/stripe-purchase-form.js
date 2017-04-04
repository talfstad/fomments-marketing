import React, { Component, PropTypes } from 'react';

class StripePurchaseForm extends Component {
  render() {
    // const { user, section } = this.props;

    return (
      <div className="row info-box">
        <div className="col-sm-1 unlock-box">
          <i className="fa fa-lock" />
        </div>
        <div className="col-sm-11">
          <p>
            PURCHASE FORM FROM STRIPE
          </p>
        </div>
      </div>
    );
  }
}

StripePurchaseForm.propTypes = {
  user: PropTypes.shape({}),
  section: PropTypes.shape({}),
};

export default StripePurchaseForm;
