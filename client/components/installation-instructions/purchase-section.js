import React, { Component } from 'react';
import { connect } from 'react-redux';

class PurchaseSection extends Component {
  render() {
    return (
      <div>
        <p>Payment Form !</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.sectionControls,
});

export default connect(mapStateToProps)(PurchaseSection);
