import React from 'react';
import { NavLink } from 'react-router-dom';
import updateService from '../../services/updateService';
import { CommentsListing } from '../comments-listing';

class UpdateItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showComments: false
    };
  }

  delete(id) {
    updateService.deleteById(id)
      .then(() => {
        console.log('deleted!');
      });
  }

  showComments() {
    this.setState({ showComments: true });
  }

  render() {
    const { update } = this.props;
    const { showComments } = this.state;

    const comments = showComments ?
      (<CommentsListing updateId={update.id} />) :
      '';

    return (
      <div className="update-item">
        <div>
          {`${update.user.firstName} ${update.user.lastName}`} <NavLink to={`/users/${update.user.id}`}>@{update.user.username}</NavLink>
        </div>
        <div>
          {update.content}
        </div>
        <div>
          Likes {update.likes} <span onClick={() => {this.showComments()}}>Comments {update.comments}</span>
        </div>
        {comments}
        <div className="update-actions">
          <span onClick={() => this.delete(update.id)}>delete</span>
        </div>
      </div>
    );
  }

}

export default UpdateItem;
