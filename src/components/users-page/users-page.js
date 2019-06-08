import React from 'react';
import userService from '../../services/userService';
import { UserItem } from '../user-item';
import { NavLink } from 'react-router-dom';
import { PostedAgo } from '../posted-ago';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (onOk) => dispatch(showModal({
    title: 'Delete user',
    message: 'Are you sure you want to delete this user?',
    onOk
  }))
});

class UsersPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true
    };

    userService.getAll()
      .then(users => {
        this.setState({ users, loading: false });
      });

  }

  delete(id) {
    const { onDelete } = this.props;

    onDelete(() => this.deleteUser(id));
  }

  deleteUser(id) {
    userService.deleteById(id)
      .then(() => {
        this.setState({ users: this.state.users });
      });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <div className="users-page-cont">
          <div className="users-cont">
            <h1>List Users</h1>

            {loading ? (<div className="loading-cont">Loading...</div>) : this.getUsersTable()}
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
    const { users } = this.state;

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
