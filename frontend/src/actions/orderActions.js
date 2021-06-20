import axios from "axios"
import { CART_EMPTY } from "../constants/cartConstants"
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstants"

export const createOrder = (order) => {
  return async (dispatch, getState) => {
    dispatch({type: ORDER_CREATE_REQUEST, payload: order})
    try {
      const userSignin = getState().userSignin
      const {userInfo} = userSignin
      const {data} = await axios.post("/api/orders/create", order, {
        headers: {
          authorization: `Bearer ${userInfo.token}`
        }
      })
      dispatch({type: ORDER_CREATE_SUCCESS, payload: data.createdOrder})
      dispatch({type: CART_EMPTY})
      localStorage.removeItem("cartItems")

    }catch(e){
      dispatch({type: ORDER_CREATE_FAIL, payload: e.response && e.response.data.error ? e.response.data.error : e.message})
    }
 }
}