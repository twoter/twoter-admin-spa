import React from 'react';
import { NavLink } from 'react-router-dom';

class UserItem extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className="user-item">
        {`${user.firstName} ${user.lastName}`} @{user.username}
        <div>
          <NavLink to={`/users/${user.id}/updates`} activeClassName="current">
            updates
          </NavLink>
        </div>
      </div>
    );
  }
}

export default UserItem;
