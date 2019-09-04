import React from 'react';
import commentService from '../../services/commentService';
import { COMMENTS_PER_PAGE } from '../../constants/common';
import { PostedAgo } from '../posted-ago';

class CommentsListing extends React.Component {
  constructor(props) {
    super(props);

    const { updateId } = props;
    this.state = {
      comments: [],
      loading: true,
      page: 1,
      canLoadMore: true
    };

    this.loadComments(updateId);
  }

  loadComments(updateId) {
    const { page } = this.state;

    this.setState({ loading: true });

    commentService.load(updateId, page).then(comments => {
      const { page } = this.state;

      const currentComments = this.state.comments;
      const newComments = [];
      for (const comment of currentComments) {
        newComments.push(comment);
      }
      for (const comment of comments) {
        newComments.unshift(comment);
      }

      const state = {
        comments: newComments,
        loading: false,
        page: page + 1
      };

      if (comments.length < COMMENTS_PER_PAGE) {
        state.canLoadMore = false;
      }

      this.setState(state);
    });
  }

  render() {
    const { updateId } = this.props;
    const { comments, loading, canLoadMore } = this.state;
    const commentsComps = [];

    for (const comment of comments) {
      commentsComps.push(
        <div key={comment.id} className="comment-item">
          <div>
            {comment.user.firstName} {comment.user.lastName} @
            {comment.user.username}
            <span>
              {' '}
              - <PostedAgo timestamp={comment.createdAt} />
            </span>
          </div>
          <div>{comment.content}</div>
          <div>{comment.likes} likes</div>
        </div>
      );
    }

    const commentsData =
      !loading && 0 === commentsComps.length ? (
        <div>No comments found.</div>
      ) : (
        commentsComps
      );

    return (
      <div className="comments-cont">
        {!loading && canLoadMore ? (
          <div
            onClick={() => {
              this.loadComments(updateId);
            }}
          >
            Load previous
          </div>
        ) : (
          ''
        )}
        {loading ? <div>Loading...</div> : ''}
        {commentsData}
      </div>
    );
  }
}

export default CommentsListing;
