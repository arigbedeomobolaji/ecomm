// jshint ignore:start
import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { addToCartReducer } from "../reducers/cartReducers"
import { productDetailReducer, productListReducer } from "../reducers/productListReducer"
import { userSigninReducer } from "../reducers/userSigninReducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const initialState = {
 userSignin: {
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
 },
 cart: {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
 }
}
const reducer = combineReducers({
 productList: productListReducer,
 productDetails: productDetailReducer,
 cart: addToCartReducer,
 userSignin: userSigninReducer
})
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store