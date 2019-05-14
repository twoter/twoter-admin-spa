import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../actions/hello';

const HelloWorld = ({ onClick, message }) => {
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  message: state.hello.message
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(sayHello('hello world'))
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
