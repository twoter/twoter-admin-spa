import React from 'react';
import ReactDOM from 'react-dom';
import { SideBar } from '../side-bar';

const style = {
  height: '100%',
  marginLeft: '250px',
  backgroundColor: 'yellow',
  top: 0,
  left: 0
}

class SideBarPage extends React.Component {

  render() {
    const { contentComponent: Component } = this.props;

    return (
      <div>
        <SideBar />
        <div style={style}>
          Main page
          <Component />
        </div>
      </div>
    )
  }

}

export default SideBarPage;
