import React, { Component } from 'react';
import PurchaseFlow from './purchase-flow';

class PurchaseSectionCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPurchaseFlow: false,
    };
  }

  setShowPurchaseFlow(val) {
    this.setState({ showPurchaseFlow: val });
  }

  handleStartPurchaseFlowClick(e) {
    e.preventDefault();
    // Change the state to show payment form, payment form will show or show login/create
    this.setState({ showPurchaseFlow: true });
  }

  render() {
    const { showPurchaseFlow } = this.state;

    if (showPurchaseFlow) {
      return (
        <PurchaseFlow
          setShowPurchaseFlow={val => this.setShowPurchaseFlow(val)}
        />
      );
    }

    return (
      <div className="row info-box">
        <div className="col-sm-1 unlock-box">
          <i className="fa fa-lock" />
        </div>
        <div className="col-sm-11 purchase-content">
          <p>
            Instant unlock $97
            use on all landing pages
            no limitation
            <button
              onClick={e => this.handleStartPurchaseFlowClick(e)}
              className="common-button purchase-section-button"
            >
              Purchase
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default PurchaseSectionCheckout;
