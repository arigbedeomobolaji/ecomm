import express from "express"
import expressAsyncHandler from "express-async-handler"
import Order from "../model/Order.js"
import { verifyAuthToken } from "../utils.js"

const orderRouter = express.Router()

// Create post route for new orders
orderRouter.post(
  "/create",
  verifyAuthToken,
  expressAsyncHandler(async(req, res) => {
  const {
    orderItems, 
    shippingAddress,
    paymentMethod, 
    itemsPrice, 
    shippingPrice, 
    taxPrice,
    totalPrice
  } = req.body
  console.log(req.body)
  if(orderItems.length === 0){
   return res.status(400).send({error: "orderItems cannot be empty"})
  }else{
    const newOrder = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      user: req.user._id
    })
    const createdOrder = await newOrder.save()
    console.log(createdOrder)
    if(!createdOrder._id){
      return res.status(500).send("There is an error saving newOrder")
    }else{
      res.status(201).send({"message": "New order succesfully saved.", createdOrder})
    }
  }
}))

export default orderRouter