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

            {loadingUsers ? (<div className="loading-cont">Loading...</div>) : this.getUserItems()}
          </div>
        </div>
      </div>
    );
  }

  getUserItems() {
    const tableRows = this.getUserEntries();

    if (0 === tableRows.length) {
      return (<div>No users found.</div>);
    }

    return tableRows;
  }

  getUserEntries() {
    const { users } = this.props;

    const userComps = [];
    for (const user of users) {
      userComps.push(this.getUserItem(user));
    }

    return userComps;
  }

  getUserItem(user) {
    const seperator = '-' // '•';
    const userDisplayName = `${user.firstName} ${user.lastName} @${user.username}`;

    return (
      <div key={user.id} className="user-item">
        <div className="names-cont">
          <NavLink className="action-link" to={`/users/${user.id}`}>{userDisplayName}</NavLink> {seperator} joined at <PostedAgo timestamp={user.createdAt} />
        </div>
        <div>
          <span>{user.updates} updates</span> {seperator} <span>{user.followers} followers</span> {seperator} <span>{user.following} following</span>
        </div>
        <div className="user-actions">
          <span className="action-link" onClick={() => this.delete(user.id)}>delete</span>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
