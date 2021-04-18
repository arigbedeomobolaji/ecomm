import React from "react"
import { useDispatch } from "react-redux"
import {Link} from "react-router-dom"
import { addToCartAction } from "../../actions/cartActions"
import "./cartitem.css"

const CartItem = (props) => {
const dispatch = useDispatch()
 // const cart = useSelector(state => state.cart)
 // const { CartItems } = cart
 
 const handleRemoveFromCart = (id) => {

 }
 return (
  <div className="cards m-l">
   <div className="small__card">
    <img src={props.image} alt={props.name} className="small__image" />
   </div>
   <div className="card__large bold">
    <Link className="card__color" to={`/products/${props.product}`}>{props.name}</Link>
   </div>
   <div>
    <select
     value={props.qty}
     onChange={e => dispatch(addToCartAction(props.product, parseInt(e.target.value, 10)))}
    >
     {[...Array(props.countInStock).keys()].map((key) => <option key={key+1} value={key+1}>{ key+1 }</option>)}
    </select>
   </div>
   <div className="card__price">
    ${props.price}
   </div>
   <button className="button button--primary" type="button" onClick={handleRemoveFromCart}>Delete</button>
  </div>
 )
}

export default CartItem