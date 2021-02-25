# Redux intro:

- The hello world of redux is a counter app.

# Activity 1: "real" banking

- do not allow balances to drop below 0
- alternatively: hit them with a 25 penalty for each withdrawal that causes a negative blanace

- if balance is higher than 500, reward them with +1% of the deposit amount

# Activity 2: three accounts, three reducers

Work from the `multiple-accounts` branch and add:

- a third account called "savings"
- actions that affect the savings account
- a reducer that managest that slice of state

Then include the new reducer in the call to `combineReducers()`.

To test, add the new action creators and any additional constants to the `window` object.