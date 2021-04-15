// jshint ignore: start
import React from "react"
import './header.css'

const Header = () => {
 return (
  <div className="header">
   <div>
    <a href="/" className="header__brand">Ecomm</a>
   </div>
   <div>
    <a href="/cart" className="header__link">Cart</a>
    <a href="/signin" className="header__link">Sign in</a>
   </div>
  </div>
  );
}

export default Header;
