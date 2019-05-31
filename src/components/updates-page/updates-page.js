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

    return (
      <div>
        <div className="users-page-cont">
          <div className="users-cont">
            Updates page
            {loading ? (<div>Loading...</div>) : ''}
            {updateComps}
          </div>
        </div>
      </div>
    );
  }

}

export default UpdatesPage;
