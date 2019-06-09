import React from 'react';
import userService from '../../services/userService';
import { UserItem } from '../user-item';
import { NavLink } from 'react-router-dom';
import { PostedAgo } from '../posted-ago';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';
import { loadUsers, deleteUser } from '../../actions/user';

const mapStateToProps = (state) => ({
  users: state.user.users,
  loadingUsers: state.user.loadingUsers,
});

const mapDispatchToProps = {
  loadUsers,
  onDelete: deleteUser,
  deleteUser: (onOk) => (dispatch) => {
    dispatch(showModal({
      title: 'Delete user',
      message: 'Are you sure you want to delete this user?',
      onOk
    }))
  }
};

class UsersPage extends React.Component {

  constructor(props) {
    super(props);

    props.loadUsers();
  }

  delete(id) {
    const { deleteUser, onDelete } = this.props;

    deleteUser(() => {
      onDelete(id);
    });
  }

  render() {
    const { loadingUsers } = this.props;

    return (
      <div>
        <div className="users-page-cont">
          <div className="users-cont">
            <h1>List Users</h1>

            {loadingUsers ? (<div className="loading-cont">Loading...</div>) : this.getUsersTable()}
          </div>
        </div>
      </div>
    );
  }

  getUsersTable() {
    const tableRows = this.getTableContent();

    if (0 === tableRows.length) {
      return (<div>No users found.</div>);
    }

    return (
      <table className="users-table">
        <tbody>
          {this.getUsersTableHeaders()}
          {tableRows}
        </tbody>
      </table>
    );
  }

  getUsersTableHeaders() {
    return (
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Updates</th>
        <th>Followers</th>
        <th>Following</th>
        <th>Joined at</th>
        <th>Actions</th>
      </tr>
    );
  }

  getTableContent() {
    const { users } = this.props;

    const userComps = [];
    for (const user of users) {
      userComps.push((
        <tr>
          <td>{user.firstName} {user.lastName}</td>
          <td>@{user.username}</td>
          <td>{user.updates}</td>
          <td>{user.followers}</td>
          <td>{user.following}</td>
          <td><PostedAgo timestamp={user.createdAt} /></td>
          <td>
            <span className="action-link" onClick={() => this.delete(user.id)}>delete</span> <NavLink className="action-link" to={`/users/${user.id}`}>view</NavLink>
          </td>
          
        </tr>
      ));
    }

    return userComps;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
