import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import EnglishSectionContent from './english-section-content';
import IsPurchasedSectionContent from './is-purchased-section-content';
import PurchaseSectionCheckout from './purchase-section-checkout';

class PurchaseSectionContainer extends Component {
  buildPurchaseArea() {
    const { activeState } = this.props;
    const { section } = activeState;

    if (section.language === 'english') {
      return <EnglishSectionContent section={section} />;
    }

    if (section.purchase) {
      return <IsPurchasedSectionContent section={section} />;
    }

    return <PurchaseSectionCheckout section={section} />;
  }

  render() {
    return (
      <div>
        {this.buildPurchaseArea()}
      </div>
    );
  }
}

PurchaseSectionContainer.propTypes = {
  activeState: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  activeState: state.sections.activeState,
});

export default connect(mapStateToProps)(PurchaseSectionContainer);
