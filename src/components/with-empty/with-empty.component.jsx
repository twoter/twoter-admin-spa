/* eslint-disable react/display-name */
import React from 'react';

const withEmpty = isEmptyMessage => WrappedComponent => ({
  isEmpty,
  ...otherProps
}) => {
  return isEmpty ? (
    <div>{isEmptyMessage}</div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withEmpty;
