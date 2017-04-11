import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../../actions/user/login';

class LoginDropDown extends Component {
  componentDidMount() {
    // Intent: Close dropdown only when click out of dropdown.
    // Use this.closeable to keep internal state
    $(this.dropdownContainer).on('shown.bs.dropdown', () => {
      this.closeable = true;
      $(this.emailInput).focus();
    });

    $(this.dropdownContainer).on('click', () => {
      this.closeable = false;
    });

    $(this.dropdownContainer).on('hide.bs.dropdown', () => {
      setTimeout(() => {
        this.closeable = !this.closeable;
      });
      return this.closeable;
    });
  }

  componentDidUpdate() {
    const { user } = this.props;
    const { login = {} } = user;
    const { errors = [] } = login;
    if (errors.length) {
      $(this.dropdownContainer).addClass('open');
    }
  }

  getErrorForField(field) {
    const { user } = this.props;
    const { login = {} } = user;
    const { errors = [] } = login;
    const error = errors.find(o => o.name === field);
    if (error) {
      return <small className="form-text text-danger text-muted">{error.message}</small>;
    }
    return <noscript />;
  }

  handleLogout(e) {
    e.preventDefault();
    const { logUserOut } = this.props;
    logUserOut();
  }

  buildLogoutDropdownMenu() {
    return [
      <li key="1">
        <a className="dropdown-item" href="a#">My Account</a>
      </li>,
      <li key="2">
        <a onClick={e => this.handleLogout(e)} className="dropdown-item" href="a#">Logout</a>
      </li>,
    ];
  }

  handleSignIn(e) {
    e.preventDefault();
    const {
      logUserIn,
    } = this.props;

    logUserIn({
      email: this.emailInput.value,
      password: this.passwordInput.value,
    });

    $(this.dropdownContainer).removeClass('open');
  }

  buildLoginDropdownMenu() {
    return (
      <form onSubmit={e => this.handleSignIn(e)}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            ref={(c) => { this.emailInput = c; }}
            id="email"
            type="email"
            className="form-control"
            aria-describedby="email-help"
            placeholder="Enter Email Address"
          />
          {this.getErrorForField('email')}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <small id="forgot-password" className="pull-right form-text text-muted">
            <a href="d#">Forgot Password</a>
          </small>
          <input
            ref={(c) => { this.passwordInput = c; }}
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
          {this.getErrorForField('password')}
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="submit pull-right btn btn-default"
          >
            Submit
          </button>
          <button className="create-account pull-right btn">Create Account</button>
        </div>
      </form>
    );
  }

  render() {
    const {
      user,
    } = this.props;

    return (
      <div
        ref={(c) => { this.dropdownContainer = c; }}
        className="button-group"
      >
        <button
          type="button"
          className="login-button btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {user._id ?
            <span>
              <i className="gold-member fa fa-trophy" /> {user.emails[0].address}
            </span> :
            <span>Sign in</span>
          } <span className="caret" />
        </button>
        <ul
          ref={(c) => { this.dropdown = c; }}
          className="header-login dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          {user._id ? this.buildLogoutDropdownMenu() : this.buildLoginDropdownMenu()}
        </ul>
      </div>
    );
  }
}

LoginDropDown.propTypes = {
  logUserIn: PropTypes.func,
  logUserOut: PropTypes.func,
  user: PropTypes.shape({
    errors: PropTypes.arrayOf(PropTypes.object),
  }),
};

const actions = {
  logUserOut: loginActions.logUserOut,
  logUserIn: loginActions.logUserIn,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(LoginDropDown);
