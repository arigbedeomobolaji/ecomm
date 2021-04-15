// jshint ignore: start
import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import "./home.css"
import Product from "../product/Product"
import LoadingBox from "../loadingbox/LoadingBox"
import MessageBox from "../messagebox/MessageBox"
import {productListAction} from "../../actions/productListAction"

const Home = () => {
  const dispatch = useDispatch()
  const listProduct = useSelector((state) => state.productList)
  const {loading, products, error} = listProduct
  useEffect(() => {
    dispatch(productListAction())
  }, [])

  return (
    <div>
      {
        loading ? (
          <LoadingBox />
        ) : error ? (
            <MessageBox variant={"danger"}>{ error }</MessageBox>
          ) : (
        <div className="cards">
        {
          products.map((product) => <Product key={product._id} product={product} />)
        }
        </div> 
        )
      }
  </div>
 )
}
export { Home as default}