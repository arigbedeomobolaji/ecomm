import express from "express"
import data from "./data.js"

const app = express()
const port = process.env.PORT || 5000

app.get("/api/products/:id", (req, res) => {
 const id = req.params.id
 const product = data.products.find((product) => product._id === id)
 if (product) {
  res.send(product)
 } else {
  res.status(404).send({message: "product not found"})
 }
})

app.get("/api/products", (req, res) => {
 res.send(data.products)
})

app.get("/", (req, res) => {
 res.send("Welcome Let's code")
})

app.listen(port, () => console.log(`serve at http://localhost:${port}`))