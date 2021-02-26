export const BANKING_WITHDRAW = 'banking/withdraw';
export const BANKING_DEPOSIT = 'banking/deposit';
export const INVESTMENT_WITHDRAW = 'investment/withdraw';
export const INVESTMENT_DEPOSIT = 'investment/deposit';
export const TRANSFER = 'transfer';
export const ACCOUNT_BANKING = 'banking';
export const ACCOUNT_INVESTMENT = 'investment';
// Write Action Creator functions that generate those action objects!!!!

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
