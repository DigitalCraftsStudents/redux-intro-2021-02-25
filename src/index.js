import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  banking,
  investment,
  transactions  
} from './reducers';

const rootReducer = combineReducers({
  banking,
  investment,
  transactions
});

const enhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(
  rootReducer,
  enhancers
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// // .subscribe() - you pass it a function, it runs your function when state changes
// // .dispatch() - you pass it an action, it calls the reducer and updates state

// // Because we're not using React yet, we'll attach some things to the global window object:
// window.store = store;
// window.bankingDeposit = bankingDeposit;
// window.bankingWithdraw = bankingWithdraw;
// window.investmentDeposit = investmentDeposit;
// window.investmentWithdraw = investmentWithdraw;
// window.transfer = transfer;
// window.ACCOUNT_BANKING = ACCOUNT_BANKING;
// window.ACCOUNT_INVESTMENT = ACCOUNT_INVESTMENT;

// // Step two, set up automatic console.log() when the state changes
// store.subscribe(() => {
//   console.log('-------- state was updated --------');
//   console.table(store.getState());
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

