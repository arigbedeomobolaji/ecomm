import mongoose from "mongoose"
const Schema = mongoose.Schema

const orderSchema = new Schema({
  orderItems: [{
    name: {type: String, require: true},
    qty: {type: Number, required: true},
    image: {type: String, required: true},
    price: {type: Number, requird: true},
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      requird: true
    }
  }],
  shippingAddress: {
    name: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: String, required: true},
    country: {type: String, required: true},
  },
  paymentMethod: {type: String, required: true, default: "PayPal"},
  itemsPrice: {type: Number, required: true},
  shippingPrice: {type: Number, required: true},
  taxPrice: {type: Number, required: true},
  isPaid: {type: Boolean, default: false},
  paidDate: {type: Date},
  deliveryDate: {type: Date},
  isDelivered: {type: Boolean, default: false},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
})

export default orderSchema