// jshint ignore:start
import React from "react"
import {Link} from "react-router-dom"
import data from "../../data"
import "./products.css"
import Rating from "../rating/Rating"

const Products = (props) => {
 const _id = props.match.params.id
 const { products } = data
 const product = products.find(product => product._id === _id)
 if(!product) {
  return <div>Product not found</div>
 }
 return (
  <div>
   <Link className="return-home" to="/">Back to Home</Link>
   <div className="product">
    <div className="product__image-container">
     <img className="product__image" src={product.image} alt={product.name} />
    </div>
    <div className="product__description">
     <h2 className="product-description__title">{product.name}</h2>
     <Rating rating={product.rating} numReviews={ product.numReviews } />
     <p>Price: ${ product.price }</p>
     <p>Description: {product.description} </p>
    </div>
    <div className="product__checkout">
    <div className="product__checkout__flex">
      <div>Price</div>
      <div>${ product.price }</div>
     </div>
     <div className="product__checkout__flex">
      <div>Status</div>
      <div>{
       product.countInStock > 0 ? (
       <span className="success">In Stock</span>
       ) : (
        <span className="failed"> Unavailable</span>
       )
      }</div>
     </div>
      <button className="button button--primary button--block">Add to cart </button>
    </div>
   </div>
  </div>
 )
}

export default Products