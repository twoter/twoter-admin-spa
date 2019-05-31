import React from 'react';
import { NavLink } from 'react-router-dom';

class UpdateItem extends React.Component {

  render() {
    const { update } = this.props;

    return (
      <div className="user-item">
        <div>..user..</div>
        <div>
          {update.content}
        </div>
        {/* <div>
          <NavLink to="/users/updates" activeClassName="current">updates</NavLink>
        </div> */}
      </div>
    );
  }

}

export default UpdateItem;
