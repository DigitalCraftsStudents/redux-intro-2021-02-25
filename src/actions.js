import axios from 'axios';
export const GET_DATA = 'get-data'; // overwrite with stuff from api
export const BANKING_WITHDRAW = 'banking/withdraw';
export const BANKING_DEPOSIT = 'banking/deposit';
export const INVESTMENT_WITHDRAW = 'investment/withdraw';
export const INVESTMENT_DEPOSIT = 'investment/deposit';
export const TRANSFER = 'transfer';
export const ACCOUNT_BANKING = 'banking';
export const ACCOUNT_INVESTMENT = 'investment';
// Write Action Creator functions that generate those action objects!!!!

export const setData = (data) => (
    {
        type: GET_DATA,
        payload: {
            ...data
        }
    }
);

export const apiGetData = () => {
    return async (dispatch, getState) => {
        const current = await axios.get('/api');
        // dispatch "regular"
        dispatch(setData(current.data));
    }
};

export const transfer = (amount, from, to) => (
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

export const bankingDeposit = (amount) => (
  {
    type: BANKING_DEPOSIT, // not an arg, because typos!
    payload: {
      amount
    }
  }  
);

export const bankingWithdraw = (amount) => (
  {
    type: BANKING_WITHDRAW,
    payload: {
      amount
    }
  }
)

export const investmentDeposit = (amount) => (
  {
    type: INVESTMENT_DEPOSIT,
    payload: {
      amount
    }
  }
);
export const investmentWithdraw = (amount) => (
  {
    type: INVESTMENT_WITHDRAW,
    payload: {
      amount
    }
  }
);


export const apiBankingDeposit = (depositAmount) => {
    return async (dispatch, getState) => {
        // do axios here!
        // and then dispatch the "regular" version of depositing
        // 1. get the current amount from api
        const current = await axios.get('/api/banking');
        const newAmount = current.data.banking + depositAmount;
        // 2. update the api with new amount
        const resp = await axios.put('/api/banking', {
            amount: newAmount
        });
        // 3. dispatch regular version of deposit
        dispatch(bankingDeposit(depositAmount));
    };
};

export const apiBankingWithdraw = (withdrawAmount) => {
    return async (dispatch, getState) => {

        // 1. get the current amount in api
        const current = await axios.get('/api/banking');
        const newAmount = current.data.banking - withdrawAmount;
        // 2. update the api with new amount
        const resp = await axios.put('/api/banking', {
            amount: newAmount
        })
        // 3. dispatch regular version of withdraw
        dispatch(bankingWithdraw(withdrawAmount));
    }
}