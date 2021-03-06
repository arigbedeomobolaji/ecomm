// jshint ignore:start
import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, SHIPPING_ADDRESS } from "../constants/cartConstants"

const cartDefault = {
 cartItems: [],
 shippingAddress: null
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
   case CART_REMOVE_ITEM:
     return {
       ...state,
       cartItems: state.cartItems.filter((cartItem) => cartItem.product !== action.payload)
     }
   case SHIPPING_ADDRESS:
     return {
       ...state,
      shippingAddress: action.payload
     }
   case CART_SAVE_PAYMENT_METHOD:
     return {
       ...state,
       cartPaymentMethod: action.payload
     }
    case CART_EMPTY:
      return {
        ...state,
        cartItems: []
      }
  default:
   return state
 }

}