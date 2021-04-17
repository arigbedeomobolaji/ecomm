// jshint ignore:start
import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { addToCartReducer } from "../reducers/cartReducers"
import { productDetailReducer, productListReducer } from "../reducers/productListReducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const initialState = {
 cart: {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
 }
}
const reducer = combineReducers({
 productList: productListReducer,
 productDetails: productDetailReducer,
 cart: addToCartReducer
})
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store