import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupModalOne extends Component {
  render() {
    return (
      <div className="inner-content-container dt">
        <div className="flow-nav">
          <ol>
            <li className="active">
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
            <li>
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
            Welcome to <strong>fomments</strong>!
          </h3>
          <p className="title">
            <span>Starting today, enjoy full access including over </span>
            <em>50</em>
            <span> sections in </span>
            <em>8</em>
            <span> verticals and </span>
            <em>6</em>
            <span> languages.</span>
          </p>
          <img src="/images/signup-flow-one-feat.png" alt="sign up feature" />
        </div>
      </div>
    );
  }
}

export default SignupModalOne;
