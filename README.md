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

# Middleware

## First, let's talk about enhancers

Technically, the redux dev tools are a kind of enhancer.
It lets you modify the store for custom behavior when you `dispatch()`, `subscribe()`, or `getState()`.


## What is Redux middleware?

It lets you do something with an action after `dispatch()` but before it arrives at the reducer.

Why would you want to intercept the action before the reducer sees it?

- API communication
- logging


## Great, how does this help me write async code that talks to an API?

Redux has an official middleware that lets you use async functions with `dispatch()`

It's called `redux-thunk`

### What's a "thunk"?

It's a function that performs some delayed action

It's just a function that receives two arguments from the Redux store:

- `dispatch`
- `getState`

That means that you can `dispatch()` again.

## How do I write one of these?

The most popular option is as an action creator function.

Here's one that gets the inital data from the API:

```js

```



## How do I use middleware in a Redux application?


You have to configure the store to use it:

- import `applyMiddleware` from `redux`
- pass the middleware to `applyMiddleware()`
- pass the result as the an additional argument to `createStore()`
- 


```js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const enhancers = applyMiddleware(thunkMiddleware);
const store = createStore(store, defaultState, enhancers);
```

## Wait, what about the dev tools?

There's a module for that!

```sh
yarn add redux-devtools-extension
```


```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const enhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(store, defaultState, enhancers);
```


## What does middleware look even like?

Honestly, it looks super gross:

```js
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here

      return next(action)
    }
  }
}
```

It gets better if you write it as nested arrow functions with implicit return:

```js
const anotherExampleMiddleware = storeAPI => next => action => {
  // Do something in here, when each action is dispatched

  return next(action)
}
```
