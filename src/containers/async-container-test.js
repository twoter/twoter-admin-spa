import React from 'react';
import { connect } from 'react-redux';
import { asyncAction } from '../actions/hello';

const mapStateToProps = state => ({
  message: state.hello.message,
  title: state.hello.title
});

const mapDispatchToProps = {
  onLoad: asyncAction
};

class AsyncComponentTest extends React.Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    console.log('AsyncComponentTest render');
    console.log(JSON.stringify(this.props, null, 2));
    return (
      <div>
        <div>------------AsyncComponentTest-begining---</div>
        <h1>title: {this.props.title}</h1>
        <h1>message: {this.props.message}</h1>

        <div>------------AsyncComponentTest-end---</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncComponentTest);
