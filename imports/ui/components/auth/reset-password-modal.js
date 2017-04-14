import React from 'react';
import Modal from '../modal';

const ResetPasswordModal = () =>
  <Modal>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Reset Password</h4>
        </div>
        <div className="modal-body">
          <p>One fine body&hellip;</p>
        </div>
        <div className="modal-footer">
          <button type="submit" className="submit pull-right btn btn-default">Submit</button>
        </div>
      </div>
    </div>
  </Modal>;

export default ResetPasswordModal;
