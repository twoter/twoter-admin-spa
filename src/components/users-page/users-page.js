import React from 'react';
import userService from '../../services/userService';
import { UserItem } from '../user-item';
import { NavLink } from 'react-router-dom';

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
      return (<div>No users found.</div>)
    }

    return (
      <table className="users-table">
        {this.getUsersTableHeaders()}
        {tableRows}
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
    )
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
          <td>{user.createdAt}</td>
          <td>
            <span onClick={() => this.delete(user.id)}>delete</span> <NavLink to={`/users/${user.id}`}>view</NavLink>
          </td>
          
        </tr>
      ));
    }

    return userComps;
  }
}

export default UsersPage;
