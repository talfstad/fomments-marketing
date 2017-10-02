import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TryItNowComponent from './try-it-now';

class TryItNowSection extends Component {
  render() {
    const { user } = this.props;

    if (_.has(user, '_id')) {
      return <section className="try-it-now-section" />;
    }

    return <TryItNowComponent />;
  }
}

TryItNowSection.propTypes = {
  user: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(TryItNowSection);
