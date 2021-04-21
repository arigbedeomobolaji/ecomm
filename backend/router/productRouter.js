import express from "express"
import asyncHandler from "express-async-handler"
import Product from "../model/Product.js"
import data from "../data.js"
const productRouter = express.Router()

productRouter.get("/seed", asyncHandler(async (req, res) => {
 
 const createdProducts = await Product.insertMany(data.products)

 if (createdProducts) {
  return res.send({createdProducts})
 }

 res.status(404).send({message: "No products"})
}))

productRouter.get("/:id", asyncHandler(async (req, res) => {
 const product = await Product.findById(req.params.id)
 if(product) {
  return res.send(product)
 }
 res.status(404).send({message: `product with id ${req.params.id} not found.`})
}))

productRouter.get("/", asyncHandler(async (req, res) => {
 const products = await Product.find({})
 if(products) {
  return res.send(products)
 }
 res.status(404).send({message: "No product found"})
}))

export default productRouter