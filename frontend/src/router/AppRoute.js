// jshint ignore:start
import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../views/home/Home"
import Products from "../views/products/Products"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Cart from "../views/cart/Cart"
import Signin from "../views/signin/Signin"
import Register from "../views/register/Register"
import Shipping from "../views/shipping/Shipping"
import Payment from "../views/payment/Payment"
import PlaceHolder from "../views/placeorder/PlaceOrder"

const AppRoute = () => {
 return (
  <BrowserRouter>
    <Header />
    <Switch>
     <Route path="/" component={Home} exact></Route>
     <Route path="/products/:id" component={Products}></Route>
     <Route path="/cart/:id?" component={Cart} />
     <Route path="/signin" component={Signin} />
     <Route path="/register" component={Register} />
     <Route path="/shipping" component={Shipping} />
     <Route path="/payment" component={Payment} />
     <Route path="/placeorder" component={PlaceHolder} />
    </Switch>
    <Footer />
  </BrowserRouter>
 )
}


export default AppRoute