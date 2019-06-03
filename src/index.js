import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { store, history } from './store';
import { PrivateRoute } from './components/private-route';
import { PublicOnlyRoute } from './components/public-only-route';
import { DashboardPage } from './components/dashboard-page';
import { LoginPage } from './components/login-page';
import { SideBarPage } from './components/side-bar-page';
import { UsersPage } from './components/users-page';
import { UserUpdatesPage } from './components/user-updates-page';
import { UpdatesPage } from './components/updates-page';
import { AdminUsersListingPage } from './components/admin-users-listing-page';
import './index.css';

const c = withRouter(props => <SideBarPage {...props}/>);

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute exact path="/home" component={c} contentComponent={DashboardPage} />
        <PrivateRoute exact path="/users" component={c} contentComponent={UsersPage} />
        <PrivateRoute exact path="/users/:id" component={c} contentComponent={UserUpdatesPage} />
        <PrivateRoute exact path="/updates" component={c} contentComponent={UpdatesPage} />
        <PrivateRoute exact path="/admin-users" component={c} contentComponent={AdminUsersListingPage} />

        <PublicOnlyRoute path="/login" component={LoginPage} />
        <Route render={() => (<Redirect to="/home" />)}/>
      </Switch>
    </ConnectedRouter>
  </Provider>),
document.getElementById('index')
);
