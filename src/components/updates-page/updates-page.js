import React from 'react';
import updateService from '../../services/updateService';
import { UpdateItem } from '../update-item';
import { connect } from 'react-redux';
import { loadUpdates } from '../../actions/update';

const mapStateToProps = (state) => ({
  updates: state.update.updates,
  loadingUpdates: state.update.loadingUpdates
});

const mapDispatchToProps = {
  loadUpdates
};

class UpdatesPage extends React.Component {

  constructor(props) {
    super(props);

    props.loadUpdates()
  }

  render() {
    const { updates, loadingUpdates } = this.props;

    const updateComps = [];
    for (const update of updates) {
      updateComps.push((
        <UpdateItem update={update} />
      ));
    }

    const updatesData = (!loadingUpdates && 0 === updateComps.length) ?
      (<div>No updates found.</div>) :
      updateComps;

    return (
      <div>
        <div className="users-page-cont">
          <div className="users-cont">
            <h1>List Updates</h1>
            {loadingUpdates ? (<div>Loading...</div>) : updatesData}
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatesPage);
