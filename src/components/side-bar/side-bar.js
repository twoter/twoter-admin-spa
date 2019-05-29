import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const routes = [
  {
    path: '/home',
    name: 'Dashboard'
  },
  {
    path: '/users',
    name: 'Users'
  },
  {
    path: '/admin-users',
    name: 'Admin Users'
  }
];

class SideBar extends React.Component {

  render() {
    const links = routes.map((route) => (
      <li>
        <NavLink to={route.path} activeClassName="current">{route.name}</NavLink>
      </li>
    ));

    return (
      <div className="side-bar-cont">
        <ul>
          {links}
        </ul>
      </div>
    );
  }

}

export default SideBar;
