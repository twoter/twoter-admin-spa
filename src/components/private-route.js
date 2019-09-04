import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services/auth-service';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isLoggedIn() ? (
        <Component contentComponent={rest.contentComponent} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: props.location
            }
          }}
        />
      )
    }
  />
);
