import React from 'react';
import { NavLink } from 'react-router-dom';
import updateService from '../../services/updateService';

class UpdateItem extends React.Component {

  delete(id) {
    updateService.deleteById(id)
      .then(() => {
        console.log('deleted!')
      });
  }

  render() {
    const { update } = this.props;

    return (
      <div className="update-item">
        <div>
          {`${update.user.firstName} ${update.user.lastName}`} <NavLink to={`/users/${update.user.id}`}>@{update.user.username}</NavLink>
        </div>
        <div>
          {update.content}
        </div>
        <div>
          Likes {update.likes} Comments {update.comments}
        </div>
        <div className="update-actions">
          <span onClick={() => this.delete(update.id)}>delete</span>
        </div>
      </div>
    );
  }

}

export default UpdateItem;
