import React from 'react';
import updateService from '../../services/updateService';
import { UpdateItem } from '../update-item';
import { connect } from 'react-redux';
import { loadUpdates } from '../../actions/update';

const mapStateToProps = (state) => ({
  updates: state.update.updates,
  loadingUpdates: state.update.loadingUpdates
});

const mapDispatchToProps = {
  loadUpdates
};

class UpdatesPage extends React.Component {

  constructor(props) {
    super(props);

    props.loadUpdates()
  }

  render() {
    const { updates, loadingUpdates } = this.props;

    return (
        <div className="users-page-cont">
          <div className="users-cont">
            <h1>List Updates</h1>
            {loadingUpdates ? <div>Loading...</div> : <Updates updates={updates}/>}
          </div>
        </div>
    );
  }

}

const Updates=({updates})=>{
  return 0 === updates.length ? <div>No updates found.</div> : updates.map(u=><UpdateItem key={u.id} update={u} />)
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatesPage);
