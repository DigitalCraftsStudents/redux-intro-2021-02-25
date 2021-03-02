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

# Storing Arrays in State:

Next example: add a Transactions slice + reducer to app.

- add an entry for every deposit/withdrawal
- include date


Allows us to show all transactions as a list in React (that updates in real-time).

# Connecting Redux to React

- Dumb Components
- Smart Containers
- Translation functions
    - mapStateToProps()
    - mapDispatchToProps()
- Connected Components


# Activity 3:

- add an Investments component with two forms (one for deposit, one for withdrawal)
- Confirm that all 5 kinds of actions create new `<li>` elements to appear in the Transactions component





# Axios calls to API


## On banking deposit/withdrawal

Update the API

## On investment deposit/withdrawal

Update the API

## On page load...get data from API

Get the initial data from the API.
Put this in the defaultState?
Maybe we want to replace the state?!

## On any transaction

Update the API

# Redux thunk demo notes

Some terminology:

- middleware
    - redux-devtools-extension
    - redux-thunk
- "enhancers" 
## What is an enhancer?

It's middleware that you apply to the store.

## What is middleware?

It's code that runs:

- immediately after an action is dispatched
- but right before action received by reducer

It's the official way that you do "side effects" in your redux code.

What are other examples of side effects?

- API calls
- logging (don't leave console.log in your reducers!!!! they hate that...)

## How do I create an enhancer?

- middleware libraries will usually give a function

## How do I pass an enhancer to the store?

- it's an additional argument to `createStore()`

## How do I write an async function that works with redux-thunk?

### To "install" middleware, you:

- import `applyMiddleware` from `redux`
    - this creates an enhancer
- import `composeWithDevTools` from 'redux-devtools-extension`
    - alternatively, there's a `compose` function that comes from redux


### Now, you can write an async action function

```js

(dispatch, getState) => {
    // refer to current state from getState()
    // dispatch a new action
}
```