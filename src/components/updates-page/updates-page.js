import React from 'react';
import updateService from '../../services/updateService';
import { UpdateItem } from '../update-item';

class UpdatesPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      updates: [],
      loading: true
    };

    updateService.getAll()
      .then((updates) => {
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
        <div className="users-page-cont">
          <div className="users-cont">
            <h1>List Updates</h1>
            {loading ? (<div>Loading...</div>) : ''}
            {updatesData}
          </div>
        </div>
      </div>
    );
  }

}

export default UpdatesPage;
