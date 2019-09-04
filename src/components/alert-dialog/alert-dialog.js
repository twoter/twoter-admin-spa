import React from 'react';

const AlertDialog = ({ title, message, showModal, onClose, onOk }) => {
  return (
    <div
      style={{
        display: showModal ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <div
        style={{
          width: '300px',
          border: '1px solid #000',
          backgroundColor: '#FFF',
          padding: 10,
          zIndex: 1000,
          position: 'absolute',
          left: 0,
          right: 0,
          margin: 'auto',
          marginTop: '200px'
        }}
      >
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

export default AlertDialog;
