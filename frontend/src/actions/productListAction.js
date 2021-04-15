import axios from "axios"
import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productLists"

export const productListAction =  () => {
 return async (dispatch) => {
  dispatch({type: PRODUCT_LIST_REQUEST})
  try {
   const { data } = await axios.get("/api/products")
   if (data) dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
  } catch (error) {
   dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
  }
 }
}