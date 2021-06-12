import axios from "axios"
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

// REGISTER ACTION
export const userRegisterAction = (name, email, password) => {
 return async (dispatch) => {
  dispatch({type: USER_REGISTER_REQUEST})
  try {
   const { data } = await axios.post("/api/users/register", {
    name, email, password
   })
   if (data) {
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))
   }
  } catch (error) {
   dispatch({
    type: USER_REGISTER_FAIL,
    payload: error.response && error.response.data.message ? error.response.data.message : error.message 
   })
  }
 }
}

// SIGNIN ACTION
export const userSigninAction = (email, password) => {
 return async (dispatch) => {
  dispatch({type: USER_SIGNIN_REQUEST})
  try {
   const { data } = await axios.post("/api/users/signin", {
    email, password
   })
   if (data) {
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))
   }
  } catch (error) {
   dispatch({
    type: USER_SIGNIN_FAIL,
    payload: error.response && error.response.data.message ? error.response.data.message : error.message 
   })
  }
 }
}



export const userSignoutAction = () => {
 return (dispatch) => {
  localStorage.removeItem("cartItems")
  localStorage.removeItem("userInfo")
  localStorage.removeItem("shippingAddress")
  dispatch({type: USER_SIGNOUT})
 }
}