// jshint ignore: start
import React from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import './header.css'

const Header = () => {
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
 return (
  <div className="header">
   <div>
    <Link to="/" className="header__brand">Ecomm</Link>
   </div>
   <div>
    <Link to="/cart" className="header__link header__link--cart">
    <i className="fas fa-cart-arrow-down fa-2x cart-icon"></i>
         <span className="badge"> { cartItems.length > 0 && cartItems.length }</span>
    </Link>
    <Link to="/signin" className="header__link">Sign in</Link>
   </div>
  </div>
  );
}

export default Header;
