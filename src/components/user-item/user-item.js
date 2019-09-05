import React from 'react';
import { NavLink } from 'react-router-dom';

import { PostedAgo } from '../posted-ago';

const UserItem = ({ user, handleDeleteUser }) => {
  const seperator = '-'; // '•';
  const displayName = `${user.firstName} ${user.lastName} @${user.username}`;

  return (
    <div className="user-item">
      <div className="names-cont">
        <NavLink className="action-link" to={`/users/${user.id}`}>
          {displayName}
        </NavLink>{' '}
        {seperator} joined at <PostedAgo timestamp={user.createdAt} />
      </div>
      <div>
        <span>{user.updates} updates</span> {seperator}{' '}
        <span>{user.followers} followers</span> {seperator}{' '}
        <span>{user.following} following</span>
      </div>
      <div className="user-actions">
        <span className="action-link" onClick={() => handleDeleteUser(user.id)}>
          delete
        </span>
      </div>
    </div>
  );
};

export default UserItem;
