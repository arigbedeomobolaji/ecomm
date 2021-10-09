// jshint ignore:start
import React from 'react'
import { useSelector } from 'react-redux'
import {Route, Redirect} from "react-router-dom"

export default function PrivateRoute({component: Component, ...rest}) {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  return (
    <Route
      {...rest}
      render={(props) => (
        userInfo ? (
        <Component {...props} />
        ) : (
        <Redirect to="/signin" />
        )
      )}
    />
  )
}
