import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadUsers } from '../../redux/user/actions';
import { getUsers, getIsLoadingUsers } from '../../redux/user/selectors';

import UserItemsContainer from '../../containers/user-items-container';

const UsersPage = ({ loadUsers, users, isLoading }) => {
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div className="users-page-cont">
      <div className="users-cont">
        <h1>List Users</h1>

        <UserItemsContainer
          isEmpty={0 === users.length}
          isLoading={isLoading}
          users={users}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  users: getUsers,
  isLoading: getIsLoadingUsers
});

const mapDispatchToProps = {
  loadUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
