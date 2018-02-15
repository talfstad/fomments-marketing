import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SignupModalThree extends Component {
  render() {
    // Instantly unlock all comment sections and features.
    return (
      <div>
        Hello 3
      </div>
    );
  }
}

SignupModalThree.propTypes = {
};

SignupModalThree.defaultProps = {
};

export default withRouter(SignupModalThree);
