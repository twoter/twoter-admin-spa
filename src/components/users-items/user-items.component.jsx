import React from 'react';
import { connect } from 'react-redux';

import { UserItem } from '../user-item';

import { deleteUser } from '../../redux/user/actions';
import { confirmDeleteUser } from '../../redux/modal/actions';

const UserItems = ({ users, confirmDeleteUser, deleteUser }) => {
  const deleteUserById = userId => {
    confirmDeleteUser(() => deleteUser(userId));
  };

  return users.map(user => (
    <UserItem key={user.id} user={user} handleDeleteUser={deleteUserById} />
  ));
};

const mapDispatchToProps = {
  deleteUser,
  confirmDeleteUser
};

export default connect(
  null,
  mapDispatchToProps
)(UserItems);
