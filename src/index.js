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
  balance: {
    amount: 50
  },
  transactions: {
    transactions: []
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
const WITHDRAW = 'withdraw';
const DEPOSIT = 'deposit';

// Write Action Creator functions that generate those action objects!!!!
const deposit = (amount) => (
  {
    type: DEPOSIT, // not an arg, because typos!
    payload: {
      amount
    }
  }  
);

const withdraw = (amount) => (
  {
    type: WITHDRAW,
    payload: {
      amount
    }
  }
)


// Reducer: this calculates how an action changes state
const bankTeller = (state=defaultState.balance, action) => {
  
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
    case DEPOSIT:
      newState.amount += action.payload.amount;
      break;
    case WITHDRAW:
      newState.amount -= action.payload.amount;
      break;
    default:
      // no change
      break;
  }

  // - update your balance after calculating new value
  //      it returns the new version of state!!!
  return newState;
}

const transactions = (state=defaultState.transactions, action) => {
  if (!action) return state;
  if (!action.payload) return state;
  
  let newState = {
    ...state
  };
  switch (action.type) {
    case DEPOSIT:  // Intentional fallthrough
    case WITHDRAW:
      console.log('*****💰 Adding transaction 💰*****');
      newState.transactions = [     // Immutability-friendly
                                    // "push()"
        ...newState.transactions,
        {
          type: action.type,
          amount: action.payload.amount,
          date: new Date()
        }
      ]
      break;
    default:
      // no change
      break;
  }

  return newState;    
}

const rootReducer = combineReducers({
  balance: bankTeller,
  transactions
});

// The store: spoiler alert - redux gives you a function to create one!
const store = createStore(rootReducer, defaultState);
// .subscribe() - you pass it a function, it runs your function when state changes
// .dispatch() - you pass it an action, it calls the reducer and updates state

// Because we're not using React yet, we'll attach some things to the global window object:
window.store = store;
window.deposit = deposit;
window.withdraw = withdraw;


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
