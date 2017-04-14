import React, { Component, PropTypes } from 'react';

class Modal extends Component {
  render() {
    return (
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
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
