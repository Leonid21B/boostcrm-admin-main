import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import App from './App';
import './styles/index.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import { ParamsContext } from './context/ParamsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store = {store}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
