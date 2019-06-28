import React from 'react';
import { NavLink } from 'react-router-dom';
import { CommentsListing } from '../comments-listing';
import { PostedAgo } from '../posted-ago';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';
import { deleteUpdate } from '../../actions/update';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onDelete: deleteUpdate,
  deleteUpdate: (onOk) => (dispatch) => {
    dispatch(showModal({
      title: 'Delete update',
      message: 'Are you sure you want to delete this update?',
      onOk
    }))
  }
};

class UpdateItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showComments: false
    };
  }

  delete(id) {
    const { deleteUpdate, onDelete } = this.props;

    deleteUpdate(() => {
      onDelete(id);
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
          <span> - <PostedAgo timestamp={update.createdAt}/></span>
        </div>
        <div>
          {update.content}
        </div>
        <div>
          Likes {update.likes} <span onClick={() => {this.showComments()}}>Comments {update.comments}</span>
        </div>
        {comments}
        <div className="update-actions">
          <span className="action-link" onClick={() => this.delete(update.id)}>delete</span>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);
