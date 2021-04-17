// jshint ignore:start
import { CART_ADD_ITEM } from "../constants/cartConstants"

const cartDefault = {
 cartItems: []
}
export const addToCartReducer = (state = cartDefault, action) => {
 switch (action.type) {
  case CART_ADD_ITEM:
   const item = action.payload
   const existItem = state.cartItems.find((cartItem) => cartItem.product === item.product)

   if (existItem) {
    return {
     ...state,
     cartItems: state.cartItems.map((cartItem) => cartItem.product === existItem.product ? item: cartItem)
    }
   } else {
    return {
     ...state,
     cartItems: [
      ...state.cartItems,
      item
     ]
    }
   }

  default:
   return state
 }

}