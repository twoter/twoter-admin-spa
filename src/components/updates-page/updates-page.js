import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadUpdates } from '../../redux/update/actions';
import { getUpdates, getIsLoadingUpdates } from '../../redux/update/selectors';

import ShowUpdatesContainer from '../show-updates/show-updates.container';

const UpdatesPage = ({ loadUpdates, updates, isLoading }) => {
  useEffect(() => {
    loadUpdates();
  }, [loadUpdates]);

  return (
    <div className="users-page-cont">
      <div className="users-cont">
        <h1>List Updates</h1>

        <ShowUpdatesContainer
          isLoading={isLoading}
          isEmpty={0 === updates.length}
          updates={updates}
        />
      </div>
    </div>
  );
};

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
