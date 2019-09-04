import React from 'react';
import { NavLink } from 'react-router-dom';
import adminUserService from '../../services/adminUserService';
import { PostedAgo } from '../posted-ago';

class AdminUsersListingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true
    };

    adminUserService.getAll().then(users => {
      this.setState({ users, loading: false });
    });
  }

  delete(id) {
    adminUserService.deleteById(id).then(() => {
      this.setState({ users: this.state.users });
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <div className="users-page-cont">
          <div className="users-cont">
            <div className="users-title-cont">
              <h1>List Admin Users</h1>

              <NavLink to="/admin-users/new">new</NavLink>
            </div>
            {loading ? (
              <div className="loading-cont">Loading...</div>
            ) : (
              this.getUsersTable()
            )}
          </div>
        </div>
      </div>
    );
  }

  getUsersTable() {
    const tableRows = this.getTableContent();

    if (0 === tableRows.length) {
      return <div>No users found.</div>;
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
        <th>Joined at</th>
        <th>Actions</th>
      </tr>
    );
  }

  getTableContent() {
    const { users } = this.state;

    const userComps = [];
    for (const user of users) {
      userComps.push(
        <tr key={user.id}>
          <td>
            {user.firstName} {user.lastName}
          </td>
          <td>@{user.username}</td>
          <td>
            <PostedAgo timestamp={user.createdAt} />
          </td>
          <td>
            <span className="action-link" onClick={() => this.delete(user.id)}>
              delete
            </span>
          </td>
        </tr>
      );
    }

    return userComps;
  }
}

export default AdminUsersListingPage;
