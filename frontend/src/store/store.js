// jshint ignore:start
import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import productListReducer from "../reducers/productListReducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const initialState = {}
const reducer = combineReducers({
 productList: productListReducer
})
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store