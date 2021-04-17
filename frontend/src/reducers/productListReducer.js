// jshint ignore:start
import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstant";

const productListDefault = {products: [], loading: true, error: false}
export const productListReducer =  ( state = productListDefault, action ) => {
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

const productDetailDefault = {product: {}, error: false, loading: true}
export const productDetailReducer = (state = productDetailDefault, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, productId: action.payload }
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload}
    default:
      return state
  }
}