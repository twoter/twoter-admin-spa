import React from 'react';
import updateService from '../../services/updateService';
import { UpdateItem } from '../update-item';
import userService from '../../services/userService';
import Loading from '../loading/loading';

class UserUpdatesPage extends React.Component {

  constructor(props) {
    super(props);

    const userId = props.match.params.id;

    this.state = {
      updates: [],
      loadingUser: true,
      loadingUpdates: true
    };

    userService.getById(userId)
      .then((user) => {
        this.setState({ user, loadingUser: false });

        if (null !== user) {
          updateService.getByUser(userId)
            .then(updates => {
              this.setState({ updates, loadingUpdates: false });
            });
        } 
      });
  }

  render() {
    const { user, updates, loadingUser, loadingUpdates } = this.state;

    const updateComps = [];
    for (const update of updates) {
      updateComps.push((
        <UpdateItem update={update} />
      ));
    }

    let userData;
    if (loadingUser) {
      userData = (<Loading />);
    } else if (null !== user) {
      userData = (
      <div className="cont">
        <div>{user.firstName} {user.lastName}</div>
        <div>@{user.username}</div>
      </div>
      );
    } else {
      userData = null;
    }

    const updatesData = (!loadingUpdates && 0 === updateComps.length) ?
      (<div>No updates found.</div>) :
      updateComps;

    const pageData = (!loadingUser && null === user) ?
      (<div>No user found</div>) :
      (
      <div>
        <div className="user-cont">
          {userData}
        </div>
        <div className="updates-cont">
          {loadingUpdates ? (<Loading />) : ''}
          {updatesData}
        </div>
      </div>
      );

    return (
      <div>
        <div className="user-updates-page-cont">
          <div className="user-updates-cont">
            <h1>View user updates</h1>
            {pageData}
          </div>
        </div>
      </div>
    );
  }

}

export default UserUpdatesPage;
