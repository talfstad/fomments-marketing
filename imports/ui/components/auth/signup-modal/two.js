import React, { Component } from 'react';
import {
  withRouter,
  Link,
} from 'react-router-dom';

class SignupModalTwo extends Component {
  render() {
    return (
      <div>
        <Link
          to={{
            pathname: '/signup/three',
            state: { authorized: true },
          }}
        >
          Next
        </Link>
      </div>
    );
  }
}

export default withRouter(SignupModalTwo);
