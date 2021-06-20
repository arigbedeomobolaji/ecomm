import React, { useState } from "react"
import "../signin/signin.css"
import ProgressBar from "../../components/progressbar/ProgressBar"
import { useDispatch, useSelector } from "react-redux"
import { saveCartPaymentMethod } from "../../actions/cartActions"

const Payment = (props) => {
 const [paymentMethod, setPaymentMethod] = useState("PayPal")
 const cart = useSelector(state => state.cart)
 const {shippingAddress} = cart
 const dispatch = useDispatch()
 
 if(!shippingAddress.address) {
  props.history.push("/shipping")
 }

 const submitHandler = (e) => {
  e.preventDefault()
  dispatch(saveCartPaymentMethod(paymentMethod))
  props.history.push("/placeorder")
 }
 
 return (
  <>
  <ProgressBar signin shipping payment></ProgressBar>
  <form className="form" onSubmit={submitHandler}>
   <div className="form__group">
    <h1>Payment</h1>
   </div>
   <div className="form__group radio">
    <input
     className="form__input"
     type="radio"
     name="payment"
     id="paypal"
     value="PayPal"
     checked
     onChange={e => setPaymentMethod(e.target.value)}
    ></input>
    <label className="form__label" htmlFor="paypal">PayPal</label>
   </div>
   <div className="form__group radio">
    <input
     className="form__input"
     type="radio"
     name="payment"
     id="stripe"
     value="Stripe"
     onChange={e => setPaymentMethod(e.target.value)}
    ></input>
    <label className="form__label" htmlFor="stripe">Stripe</label>
   </div>
   <div className="form__group">
    <label />
    <button type="submit" className="button button--primary">Submit</button>
   </div>
  </form>
  </>
 )
}

export default Payment