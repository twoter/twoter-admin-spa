import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services/auth-service';

export const PublicOnlyRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !authService.isLoggedIn()
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/home',
        state: {
          from: props.location
        }
      }} />
  )} />
);
