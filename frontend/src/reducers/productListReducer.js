// jshint ignore:start
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productLists";

const productListDefault = {products: [], loading: true, error: false}
const productListReducer =  ( state = productListDefault, action ) => {
 switch(action.type) {
  case PRODUCT_LIST_REQUEST:
   return { loading: true }
  case PRODUCT_LIST_SUCCESS:
   return { loading: false, products: action.payload }
  case PRODUCT_LIST_FAIL:
   return {loading: false, error: action.payload}
  default: 
   return state;
 }
}

export default productListReducer