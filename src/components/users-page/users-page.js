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

  render() {
    const { users, loading } = this.state;

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
            <NavLink to={`/users/${user.id}/updates`} activeClassName="current">updates</NavLink>
          </td>
          
        </tr>
      ));
    }

    const usersData = (!loading && 0 === userComps.length) ?
      (<div>No users found.</div>) :
      userComps;

    return (
      <div>
        <div className="users-page-cont">
          <div className="users-cont">
            <h1>List Users</h1>
            <table className="users-table">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Updates</th>
                <th>Followers</th>
                <th>Following</th>
                <th>Joined at</th>
                <th>Actions</th>
              </tr>
              {usersData}
            </table>
            {loading ? (<div className="loading-cont">Loading...</div>) : ''}
          </div>
        </div>
      </div>
    );
  }

}

export default UsersPage;
