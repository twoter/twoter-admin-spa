import React from 'react';
import { connect } from 'react-redux';
import updateService from '../../services/updateService';
import { loadUpdates } from '../../actions/update';

import ShowUpdates from '../show-updates/show-updates.component';

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

    props.loadUpdates();
  }

  render() {
    const { updates, loadingUpdates } = this.props;

    return (
      <div className="users-page-cont">
        <div className="users-cont">
          <h1>List Updates</h1>
          {loadingUpdates ? <div>Loading...</div> : <ShowUpdates updates={updates}/>}
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatesPage);
