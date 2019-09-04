import React from 'react';
import { connect } from 'react-redux';
import { AlertDialog } from '../components/alert-dialog';

import { hideModal } from '../redux/modal/actions';

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
