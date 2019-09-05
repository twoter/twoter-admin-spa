import React from 'react';
import { connect } from 'react-redux';
import { confirmDeleteUser } from '../../redux/modal/actions';
import { loadUsers, deleteUser } from '../../redux/user/actions';
import { UserItem } from '../user-item';

const mapStateToProps = state => ({
  users: state.user.users,
  loadingUsers: state.user.loadingUsers
});

const mapDispatchToProps = {
  loadUsers,
  deleteUser,
  confirmDeleteUser
};

class UsersPage extends React.Component {
  constructor(props) {
    super(props);

    props.loadUsers();
  }

  delete = userId => {
    const { confirmDeleteUser, deleteUser } = this.props;

    confirmDeleteUser(() => deleteUser(userId));
  };

  render() {
    const { loadingUsers } = this.props;

    return (
      <div className="users-page-cont">
        <div className="users-cont">
          <h1>List Users</h1>

          {loadingUsers ? (
            <div className="loading-cont">Loading...</div>
          ) : (
            this.getUserItems()
          )}
        </div>
      </div>
    );
  }

  getUserItems() {
    const tableRows = this.getUserEntries();

    if (0 === tableRows.length) {
      return <div>No users found.</div>;
    }

    return tableRows;
  }

  getUserEntries() {
    const { users } = this.props;

    return users.map(user => (
      <UserItem key={user.id} user={user} handleDeleteUser={this.delete} />
    ));
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
