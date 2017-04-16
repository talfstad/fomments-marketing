import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '/imports/store';

class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'fomments-modal';
    document.body.appendChild(this.modalTarget);
    this.renderer();
  }

  componentWillUpdate() {
    this.renderer();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  renderer() {
    ReactDOM.render(
      <Provider store={store}>
        <div className="fomments-modal">
          <div
            ref={(c) => { this.el = c; }}
            className="modal fade"
            tabIndex="-1"
            data-backdrop="static"
            role="dialog"
          >
            {this.props.children}
          </div>
        </div>
      </Provider>,
      this.modalTarget);
  }

  render() {
    return <noscript />;
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
