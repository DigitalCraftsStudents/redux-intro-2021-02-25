import {
    BANKING_WITHDRAW,
    BANKING_DEPOSIT,
    INVESTMENT_WITHDRAW,
    INVESTMENT_DEPOSIT,
    TRANSFER,
    ACCOUNT_BANKING,
    ACCOUNT_INVESTMENT,
} from './actions'

const defaultState = {
    banking: {
      amount: 2
    },
    investment: {
      amount: 3
    },
    transactions: {
      transactions: []
    }
};

// Reducer: this calculates how an action changes state
export const banking = (state=defaultState.banking, action) => {
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
  
  
  export const investment = (state=defaultState.investment, action) => {
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
  
  export const transactions = (state=defaultState.transactions, action) => {
    if (!action) return state;
    if (!action.payload) return state;
    
    let newState = {
      ...state
    };
  
    switch (action.type) {
      // case DEPOSIT:  // Intentional fallthrough
      // case WITHDRAW:
      //   break;
      default:
        console.log('*****💰 Adding transaction 💰*****');
        newState.transactions = [     // Immutability-friendly
                                      // "push()"
          ...newState.transactions,
          {
            type: action.type,
            date: new Date(),
            ...action.payload,
          }
        ]
        // no change
        break;
    }
  
    return newState;    
  }
  