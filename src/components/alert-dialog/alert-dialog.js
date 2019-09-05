import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/modal/actions';

const AlertDialog = ({ title, message, showModal, onClose, onOk }) => {
  return (
    <div
      className="alert-dialog-backdrop"
      style={{
        display: showModal ? 'block' : 'none'
      }}
    >
      <div className="alert-dialog">
        <div className="alert-dialog-title">{title}</div>
        <div className="alert-dialog-message">{message}</div>
        <div>
          <button
            onClick={() => {
              onOk();
              onClose();
            }}
          >
            Ok
          </button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ modal }) => ({
  title: modal.title,
  message: modal.message,
  showModal: modal.showModal,
  onOk: modal.onOk
});

const mapDispatchToProps = {
  onClose: hideModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertDialog);
