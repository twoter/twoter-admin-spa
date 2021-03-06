import React from 'react';
import { UpdateItem } from '../update-item';
import userService from '../../services/userService';
import Loading from '../loading/loading';
import { connect } from 'react-redux';

import {
  loadUpdatesForUser,
  clearLoadedUpdates
} from '../../redux/update/actions';

const mapStateToProps = state => ({
  updates: state.update.updates,
  loadingUpdates: state.update.loadingUpdates
});

const mapDispatchToProps = {
  loadUpdatesForUser,
  clearLoadedUpdates
};

class UserUpdatesPage extends React.Component {
  constructor(props) {
    super(props);

    const userId = props.match.params.id;

    this.state = {
      updates: [],
      loadingUser: true,
      loadingUpdates: true
    };
    this.props.clearLoadedUpdates();

    userService.getById(userId).then(user => {
      this.setState({ user, loadingUser: false });

      this.props.loadUpdatesForUser(userId);
    });
  }

  render() {
    const { user, loadingUser } = this.state;
    const { updates, loadingUpdates } = this.props;

    const updateComps = [];
    for (const update of updates) {
      updateComps.push(<UpdateItem key={update.id} update={update} />);
    }

    let userData;
    if (loadingUser) {
      userData = <Loading />;
    } else if (null !== user) {
      userData = (
        <div className="cont">
          <div>
            {user.firstName} {user.lastName}
          </div>
          <div>@{user.username}</div>
        </div>
      );
    } else {
      userData = null;
    }

    const updatesData =
      !loadingUpdates && 0 === updateComps.length ? (
        <div>No updates found.</div>
      ) : (
        updateComps
      );

    const pageData =
      !loadingUser && null === user ? (
        <div>No user found</div>
      ) : (
        <div>
          <div className="user-cont">{userData}</div>
          <div className="updates-cont">
            {loadingUser || loadingUpdates ? (
              <div>Loading...</div>
            ) : (
              updatesData
            )}
          </div>
        </div>
      );

    return (
      <div className="user-updates-page-cont">
        <div className="user-updates-cont">
          <h1>View user updates</h1>
          {pageData}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserUpdatesPage);
