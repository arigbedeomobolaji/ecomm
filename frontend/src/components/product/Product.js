import React from "react"
import {Link} from "react-router-dom"
import Rating from "../rating/Rating"

const Product = ({product}) => {
 return (
 <div className="card">
      <Link to={`/products/${product._id}`} >
       <img
        className="card__img"
        src={product.image}
        alt={product.name} />
      </Link>
      <div className="card__body">
       <Link to={`/products/${product._id}`}>
       <h2 className="card__title">{ product.name }</h2>
       </Link>
       <Rating rating={product.rating} numReviews={product.numReviews} />
       <h2 className="card__price">${ product.price }</h2>
      </div>
     </div>
 )
}

export default Product