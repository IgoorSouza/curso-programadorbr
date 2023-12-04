const redux = require('redux')
const createStore = redux.createStore //método preterido, usar configureStore
const combineReducers = redux.combineReducers

const {incrementAction, decrementAction} = require('./actions/CounterActions')
const addItemAction = require('./actions/ListActions')

const counterReducer = require('./reducers/CounterReducer')
const listReducer = require('./reducers/ListReducer')

const allReducers = combineReducers({
  counter: counterReducer, 
  list: listReducer
})

const store = createStore(allReducers)
console.log(store.getState().list)

store.subscribe(() => { console.log(store.getState().counter) })

store.dispatch(addItemAction("Um novo item"))
store.dispatch(incrementAction())
store.dispatch(incrementAction(1))
store.dispatch(incrementAction(5))