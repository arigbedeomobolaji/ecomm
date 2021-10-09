import axios from "axios"
import {PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstant"

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

export const productDetailsAction = (productId) => {
 return async(dispatch) => {
  dispatch({type: PRODUCT_DETAIL_REQUEST, payload: productId})
  try {
     const { data } = await axios.get(`/api/products/${productId}`)
     if (data) dispatch({type: PRODUCT_DETAIL_SUCCESS, payload: data})
  } catch(err){
   dispatch({type: PRODUCT_DETAIL_FAIL, 
    payload: err.response && err.response.data.message ? err.response.data.message : err.message})
  }
 }
}