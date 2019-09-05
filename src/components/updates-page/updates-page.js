import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShowUpdates from '../show-updates/show-updates.component';

import { loadUpdates } from '../../redux/update/actions';
import { getUpdates, getIsLoadingUpdates } from '../../redux/update/selectors';

class UpdatesPage extends React.Component {
  constructor(props) {
    super(props);

    props.loadUpdates();
  }

  render() {
    const { updates, isLoading } = this.props;

    return (
      <div className="users-page-cont">
        <div className="users-cont">
          <h1>List Updates</h1>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ShowUpdates updates={updates} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  updates: getUpdates,
  isLoading: getIsLoadingUpdates
});

const mapDispatchToProps = {
  loadUpdates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatesPage);
