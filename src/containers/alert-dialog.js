import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions/modal';
import { AlertDialog } from '../components/alert-dialog';

const mapStateToProps = state => ({
  title: state.modal.title,
  message: state.modal.message,
  showModal: state.modal.showModal,
  onOk: state.modal.onOk
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertDialog);
