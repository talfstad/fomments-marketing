import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SignupModalThree extends Component {
  componentDidMount() {
    const {
      updateShouldClose,
      location: {
        state = { authorized: false },
      },
    } = this.props;

    // if (!state.authorized) updateShouldClose(true);
    updateShouldClose(true); // temp to just make it close for now
  }

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
  location: PropTypes.shape({}),
  updateShouldClose: PropTypes.func,
};

SignupModalThree.defaultProps = {
  location: {},
  updateShouldClose: null,
};

export default withRouter(SignupModalThree);
