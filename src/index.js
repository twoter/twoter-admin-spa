import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelloWorld } from './components/hello-world';
import { store } from './store';

import { Switch, Router, Route, Redirect, Link, browserHistory } from 'react-router-dom';

import Hello from './containers/hello-world';
import AsyncComponentTest from './containers/async-container-test';

import { PrivateRoute } from './components/private-route';
import { PublicOnlyRoute } from './components/public-only-route';
import { HomePage } from './components/home-page';
import { LoginPage } from './components/login-page';

import createHistory from 'history/createBrowserHistory';

const C1 = () => {
  console.log('render c1')
  return (
    <div style={{ width: '300px', height: '100px', border: '1px solid red', padding: '10px' }}>
      C1
    </div>
  )
}

const C2 = () => {
  console.log('render c2')
  return (
    <div style={{ width: '300px', height: '100px', border: '1px solid green', padding: '10px' }}>
      C2
      <div>
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/about/xx'} className="nav-link"> c2->1 </Link></li>
        </ul>
        <Switch>
          <Route path={"/about/xx"} component={C3} />
        </Switch>
      </div>
    </div>
  )
}

const C3 = () => {
  console.log('render c3')
  return (
    <div style={{ width: '300px', height: '100px', border: '1px solid pink', padding: '10px' }}>
      C3
    </div>
  )
}


export const history = createHistory();

// ReactDOM.render(
//   <div>
//     <Router history={history}>
//     {/* <Router history={browserHistory}> */}
//       <ul className="navbar-nav mr-auto">
//         <li><Link to={'/'} className="nav-link"> Home </Link></li>
//         <li><Link to={'/user'} className="nav-link">Contact</Link></li>
//         <li><Link to={'/about'} className="nav-link">About</Link></li>
//       </ul>
//       <Switch>
//         <Route path={"/user"} component={C1} />
//         <Route path={"/about"} component={C2} />
//       </Switch>
//     </Router>
//   </div>
//   ,
//   document.getElementById('index')
// );

ReactDOM.render(
  <Provider store={store}>
    <AsyncComponentTest />
    <div>---------------------1</div>
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/home" component={HomePage} />
        <PublicOnlyRoute path="/login" component={LoginPage} />
        <Route render={() => (<Redirect to="/home" />)}/>
      </Switch>
    </Router>
    <div>---------------------1</div>
    <HelloWorld />
    <div>---------------------2</div>
    <Hello />
  </Provider>,
  document.getElementById('index')
);
