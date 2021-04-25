// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

// Style
import './index.css';

// Components
import App from './App';

// Store
import { store } from './store/initialState';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/home' component={App} />
      <Redirect to='/home' />
    </Router>
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
