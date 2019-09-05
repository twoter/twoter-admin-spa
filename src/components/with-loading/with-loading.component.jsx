/* eslint-disable react/display-name */
import React from 'react';

const WithLoading = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="loading-cont">Loading...</div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithLoading;
