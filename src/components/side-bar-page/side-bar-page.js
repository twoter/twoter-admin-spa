import React from 'react';
import ReactDOM from 'react-dom';
import { SideBar } from '../side-bar';

class SideBarPage extends React.Component {

  render() {
    const { contentComponent: Component } = this.props;

    console.log('---', window.location.pathname);
    console.log('---', this.props.location.pathname);

    return (
      <div>
        <SideBar />
        <div className="main-page-cont">
          <div className="main-cont">
            <Component {...this.props}/>
          </div>
        </div>
      </div>
    );
  }

}

export default SideBarPage;
