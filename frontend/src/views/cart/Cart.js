import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import { addToCartAction } from "../../actions/cartActions"

const Cart = (props) => {
 const dispatch = useDispatch()
 const productId = props.match.params.id
 const qty = props.location.search ? parseInt(props.location.search.split("=")[1], 10) : 1

 useEffect(() => {
  if (productId) {
   dispatch(addToCartAction(productId, qty))
  }
 }, [dispatch, productId, qty])
 
 return (
  <div>
   <h1>Your Cart</h1>
   <h3>Cart History</h3>
   <p>productId: {productId}</p>
   <p>Qty Added: {qty}</p>
  </div>
 )
}

export default Cart