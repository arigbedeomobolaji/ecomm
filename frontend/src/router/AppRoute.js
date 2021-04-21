// jshint ignore:start
import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../views/home/Home"
import Products from "../views/products/Products"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Cart from "../views/cart/Cart"
import Signin from "../views/signin/Signin"

const AppRoute = () => {
 return (
  <BrowserRouter>
   <div>
    <Header />
    <Switch>
     <Route path="/" component={Home} exact></Route>
     <Route path="/products/:id" component={Products}></Route>
     <Route path="/cart/:id?" component={Cart} />
     <Route path="/signin" component={Signin} />
    </Switch>
    <Footer />
   </div>
  </BrowserRouter>
 )
}


export default AppRoute