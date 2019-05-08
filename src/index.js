import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelloWorld } from './components/hello-world';
import { store } from './store';

import Hello from './containers/helloWorld';

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
    <div>---------------------</div>
    <Hello />
  </Provider>,
  document.getElementById('index')
);
