import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import { createGlobalStyle } from 'styled-components'
import img from './img/img-bg.png'
import './css/tailwind.css';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
  );
  