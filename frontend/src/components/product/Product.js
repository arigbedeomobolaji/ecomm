import React from "react"
import Rating from "../rating/Rating"

const Product = ({product}) => {
 return (
 <div className="card">
      <a href={`/products/${product._id}`} >
       <img
        className="card__img"
        src={product.image}
        alt={product.name} />
      </a>
      <div className="card__body">
       <a href={`/products/${product._id}`}>
       <h2 className="card__title">{ product.name }</h2>
       </a>
       <Rating rating={product.rating} numReviews={product.numReviews} />
       <h2 className="card__price">${ product.price }</h2>
      </div>
     </div>
 )
}

export default Product