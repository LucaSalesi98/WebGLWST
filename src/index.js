import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './components/3DScene/';
import Input from './components/InputField';
import store from './reducers/appReducer';
import {Provider} from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Scene />
      <Input></Input>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
