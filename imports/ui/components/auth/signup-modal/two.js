import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  withRouter,
} from 'react-router-dom';

class SignupModalTwo extends Component {
  getErrorForField(field) {
    const { errors } = this.props;
    const error = errors.find(o => o.name === field);
    if (error) {
      return (
        <p className="f-response">{error.message}</p>
      );
    }
    return (
      <noscript />
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`Hey ${e}`);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="dinline">
        <div
          className="tablet-container live-demo-modal"
          role="document"
        >
          <div className="tablet-portrait">
            <div className="inner-content-container dt">
              <div className="flow-nav">
                <ol>
                  <li>
                    <Link
                      className="step active"
                      to="/signup/one"
                    >
                      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16.659 8.134l-7.146 6.67-2.159-2.158a.5.5 0 0 0-.707.707l2.5 2.5a.495.495 0 0 0 .694.013l7.5-7a.5.5 0 0 0-.682-.732zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11z" />
                      </svg>
                      <span className="num">1</span>
                    </Link>
                  </li>
                  <li className="divider" />
                  <li className="active">
                    <Link className="step" to="/signup/two">
                      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16.659 8.134l-7.146 6.67-2.159-2.158a.5.5 0 0 0-.707.707l2.5 2.5a.495.495 0 0 0 .694.013l7.5-7a.5.5 0 0 0-.682-.732zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11z" />
                      </svg>
                      <span className="num">2</span>
                    </Link>
                  </li>
                  <li className="divider" />
                  <li>
                    <div className="step">
                      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16.659 8.134l-7.146 6.67-2.159-2.158a.5.5 0 0 0-.707.707l2.5 2.5a.495.495 0 0 0 .694.013l7.5-7a.5.5 0 0 0-.682-.732zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11z" />
                      </svg>
                      <span className="num">3</span>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="signup-content vertical-align-center">
                <h3>
                  Create your account
                </h3>
                <div className="create-account">
                  <figure className="account-image">
                    <div className="placeholder-img" />
                    <div className="gravatar-img" id="gravatar-img">
                      <span className="sr-only">User image</span>
                    </div>
                  </figure>

                  <div className="f-form-group f-error">
                    <label htmlFor="signup-email-address">Email address</label>
                    <div className="f-input-icon f-input-icon-email">
                      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 4H3c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 1l.159.032L12 12.36 2.841 5.032 3 5h18zm1 12c0 .551-.449 1-1 1H3c-.551 0-1-.449-1-1V6c0-.11.03-.21.063-.309l9.625 7.7a.504.504 0 0 0 .624 0l9.625-7.7A.966.966 0 0 1 22 6v11z" /></svg>
                      <input id="signup-email-address" type="email" autoFocus name="email" placeholder="Fred@example.com" autoCorrect="off" value="" className="f-input" />
                    </div>
                    {this.getErrorForField('email')}
                  </div>

                  <div className="f-form-group ">
                    <label htmlFor="signup-name">Full name</label>
                    <div className="f-input-icon f-input-icon-user-circle">
                      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.383 0 0 5.383 0 12c0 3.18 1.232 6.177 3.47 8.438A11.913 11.913 0 0 0 12 24c3.234 0 6.268-1.269 8.542-3.574A11.924 11.924 0 0 0 24 12c0-6.617-5.383-12-12-12zM4.655 20.17c1.029-.563 2.533-1.111 4.002-1.644.514-.186 1.027-.372 1.52-.559a.5.5 0 0 0 .323-.468V15a.511.511 0 0 0-.335-.472C10.118 14.511 9 14.072 9 12a.48.48 0 0 0-.482-.494c-.047-.032-.138-.218-.138-.506s.091-.474.12-.5A.5.5 0 0 0 9 10c0-.125-.037-.256-.118-.544-.147-.523-.537-1.913-.194-2.366.038-.051.245-.194.714-.1.26.055.518-.11.583-.369.163-.649 1.326-1.121 2.765-1.121s2.602.472 2.765 1.121c.229.917-.178 2.188-.373 2.799-.098.305-.142.443-.142.58a.48.48 0 0 0 .482.494c.046.032.137.218.137.506s-.091.474-.12.5a.5.5 0 0 0-.5.5c0 2.072-1.118 2.511-1.158 2.526A.5.5 0 0 0 13.5 15v2.5a.5.5 0 0 0 .324.468c.543.204 1.086.399 1.614.591 1.51.546 2.943 1.067 3.919 1.599A10.901 10.901 0 0 1 12 23a10.908 10.908 0 0 1-7.345-2.83zm15.453-.739c-1.047-.625-2.583-1.181-4.33-1.812l-1.278-.466v-1.848c.501-.309 1.384-1.108 1.49-2.936.386-.226.63-.727.63-1.37 0-.579-.198-1.043-.52-1.294.243-.757.681-2.144.385-3.327C16.138 4.992 14.256 4.5 12.75 4.5c-1.342 0-2.982.391-3.569 1.456-.707-.042-1.095.273-1.29.53-.635.838-.216 2.368.02 3.211-.329.249-.531.718-.531 1.303 0 .643.244 1.144.63 1.37.106 1.828.989 2.627 1.49 2.936v1.848l-1.184.433c-1.624.589-3.299 1.196-4.413 1.858A10.928 10.928 0 0 1 1 12C1 5.935 5.935 1 12 1s11 4.935 11 11c0 2.774-1.024 5.397-2.892 7.431z" /></svg>
                      <input id="signup-name" type="text" name="name" placeholder="Fred Smith" autoCorrect="off" value="" className="f-input" />
                    </div>
                    {this.getErrorForField('full_name')}
                  </div>

                  <div className="f-form-group f-success">
                    <label htmlFor="signup-password">Password</label>
                    <div className="f-input-icon f-input-icon-lock">
                      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14c-.552 0-1 .449-1 1 0 .365.207.672.5.846V18.5a.5.5 0 0 0 1 0v-2.654A.987.987 0 0 0 13 15c0-.551-.448-1-1-1zm8.5-5H18V6c0-3.309-2.691-6-6-6S6 2.691 6 6v3H3.5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-14a.5.5 0 0 0-.5-.5zM7 6c0-2.757 2.243-5 5-5s5 2.243 5 5v3H7V6zm13 17H4V10h16v13z" /></svg>
                      <input id="signup-password" type="password" name="password" placeholder="At least 8 characters" autoCorrect="off" className="f-input" />
                    </div>
                    {this.getErrorForField('password')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="home-tablet-button f-action-button green"
          >
            Last step: Invite your team <i className="fa fa-angle-double-right" />
          </button>
        </div>
      </form>
    );
  }
}

SignupModalTwo.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object),
};

SignupModalTwo.defaultProps = {
  errors: [],
};

export default withRouter(SignupModalTwo);
