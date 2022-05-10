import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

axios.defaults.baseURL = 'http://localhost:4000/v1/';

const store = configureStore();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
