// jshint ignore:start
import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "../components/header/Header"
import Home from "../components/home/Home"
import Products from "../components/products/Products"
import Footer from "../components/footer/Footer"

const AppRoute = () => {
 return (
  <BrowserRouter>
   <div>
    <Header />
    <Switch>
     <Route path="/" component={Home} exact></Route>
     <Route path="/products/:id" component={Products}></Route>
    </Switch>
    <Footer />
   </div>
  </BrowserRouter>
 )
}


export default AppRoute