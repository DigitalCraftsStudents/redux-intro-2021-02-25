import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// We are importing a thing *named* createStore
// from the redux node module.
import { createStore, combineReducers } from 'redux';

// State: this is your data!
// Describe what state looks like, as a default value
const defaultState = {
  banking: {
    amount: 50
  },
  investment: {
    amount: 100
  }
};

// Actions: these are your "withdrawal" and "deposit" slips
// Rules of actions:
// 1. They must be an object
// 2. They must have a `type` key (i.e., type: 'withdrawal' or type: 'deposit')
// (optional third rule) 3. attach any additional info under a `payload` key
//      example: payload: { amount: 5 }
// What kinds of changes would we want to make to state?
// {
//   type: 'withdraw',
//   payload: {
//     amount: 5
//   }
// }

// {
//   type: 'deposit',
//   payload: {
//     amount: 100000000
//   }
// }
const BANKING_WITHDRAW = 'banking/withdraw';
const BANKING_DEPOSIT = 'banking/deposit';
const INVESTMENT_WITHDRAW = 'investment/withdraw';
const INVESTMENT_DEPOSIT = 'investment/deposit';
const TRANSFER = 'transfer';
const ACCOUNT_BANKING = 'banking';
const ACCOUNT_INVESTMENT = 'investment';
// Write Action Creator functions that generate those action objects!!!!

const transfer = (amount, from, to) => (
  from === to ? { type: ''}  // If `from` and `to` are the same, 
                             // return an empty type
  :                          // Otherwise, return an action object
  {
    type: TRANSFER,
    payload: {
      amount,
      from,
      to
    }
  }
);

const bankingDeposit = (amount) => (
  {
    type: BANKING_DEPOSIT, // not an arg, because typos!
    payload: {
      amount
    }
  }  
);

const bankingWithdraw = (amount) => (
  {
    type: BANKING_WITHDRAW,
    payload: {
      amount
    }
  }
)

const investmentDeposit = (amount) => (
  {
    type: INVESTMENT_DEPOSIT,
    payload: {
      amount
    }
  }
);
const investmentWithdraw = (amount) => (
  {
    type: INVESTMENT_WITHDRAW,
    payload: {
      amount
    }
  }
);

// Reducer: this calculates how an action changes state
const banking = (state=defaultState.banking, action) => {
  if (!action) return state;
  if (!action.payload) return state;

  let newState = {
    ...state
  };
  // - access your account balance
  //      it receives a copy of the current state
  // - see if you're doing a withrawal or deposit
  //      it receives the action
  switch (action.type) {
    case BANKING_DEPOSIT:
      newState.amount += action.payload.amount;
      break;
    case BANKING_WITHDRAW:
      newState.amount -= action.payload.amount;
      break;
    case TRANSFER:
      if (action.payload.from === ACCOUNT_BANKING) {
        newState.amount -= action.payload.amount;
      } else if (action.payload.to === ACCOUNT_BANKING) {
        newState.amount += action.payload.amount;
      }
      break;
    default:
      // no change
      break;
  }

  // - update your balance after calculating new value
  //      it returns the new version of state!!!
  return newState;
}

const investment = (state=defaultState.investment, action) => {
  if (!action) return state;
  if (!action.payload) return state;
  
  let newState = {
    ...state
  };

  switch (action.type) {
    case INVESTMENT_DEPOSIT:
      newState.amount += action.payload.amount;
      break;
    case INVESTMENT_WITHDRAW:
      newState.amount -= action.payload.amount;
      break;
    case TRANSFER:
      if (action.payload.from === ACCOUNT_INVESTMENT) {
        newState.amount -= action.payload.amount;
      } else if (action.payload.to === ACCOUNT_INVESTMENT) {
        newState.amount += action.payload.amount;
      }
      break;
    default:
      break;
  }

  return newState;
}

// The store: spoiler alert - redux gives you a function to create one!
const rootReducer = combineReducers({
  banking,
  investment
});
const store = createStore(rootReducer, defaultState);
// .subscribe() - you pass it a function, it runs your function when state changes
// .dispatch() - you pass it an action, it calls the reducer and updates state

// Because we're not using React yet, we'll attach some things to the global window object:
window.store = store;
window.bankingDeposit = bankingDeposit;
window.bankingWithdraw = bankingWithdraw;
window.investmentDeposit = investmentDeposit;
window.investmentWithdraw = investmentWithdraw;
window.transfer = transfer;
window.ACCOUNT_BANKING = ACCOUNT_BANKING;
window.ACCOUNT_INVESTMENT = ACCOUNT_INVESTMENT;

// Step two, set up automatic console.log() when the state changes
store.subscribe(() => {
  console.log('-------- state was updated --------');
  console.table(store.getState());
});
























ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
