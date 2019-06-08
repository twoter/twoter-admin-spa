import React from 'react';
import { NavLink } from 'react-router-dom';
import updateService from '../../services/updateService';
import { CommentsListing } from '../comments-listing';
import { PostedAgo } from '../posted-ago';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (updateId) => dispatch(showModal({
    title: 'Delete update',
    message: 'Are you sure you want to delete this update?',
    onOk() {
      updateService.deleteById(updateId)
        .then(() => {
          console.log('deleted!');
        });
    }
  }))
});

class UpdateItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showComments: false
    };
  }

  delete(id) {
    const { onDelete } = this.props;

    onDelete(id);
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
