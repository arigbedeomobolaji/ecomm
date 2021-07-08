import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./router/userRouter.js"
import productRouter from "./router/productRouter.js"
import orderRouter from "./router/orderRouter.js"
import { verifyAuthToken } from "./utils.js"

// configure the environment variables
dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const dbURL = process.env.DB_URL || `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`

// app setting middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// database connnection
mongoose.connect(dbURL, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: false
})


// web app backend router handlers
app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)
app.get("/api/config/paystack", (req, res) => {
  res.send(process.env.PAYSTACK_CLIENTID || "paystack_test")
})

app.get("/", (req, res) => {
 res.send("Welcome Let's code")
})

// error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({message: err.message})
 })

app.listen(port, () => console.log(`serve at http://localhost:${port}`))