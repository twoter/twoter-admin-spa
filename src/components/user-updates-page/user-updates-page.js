import React from 'react';
import updateService from '../../services/updateService';
import { UpdateItem } from '../update-item';

class UserUpdatesPage extends React.Component {

  constructor(props) {
    super(props);

    const userId = props.match.params.id;

    this.state = {
      updates: [],
      loading: true
    };

    updateService.getByUser(userId)
      .then(updates => {
        this.setState({ updates, loading: false });
      });

  }

  render() {
    const { updates, loading } = this.state;

    const updateComps = [];
    for (const update of updates) {
      updateComps.push((
        <UpdateItem update={update} />
      ));
    }

    const updatesData = (!loading && 0 === updateComps.length) ?
      (<div>No updates found.</div>) :
      updateComps;

    return (
      <div>
        <div className="user-updates-page-cont">
          <div className="user-updates-cont">
            User Updates page
            {loading ? (<div>Loading...</div>) : ''}
            {updatesData}
          </div>
        </div>
      </div>
    );
  }

}

export default UserUpdatesPage;
