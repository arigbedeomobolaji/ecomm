// jshint ignore:start
import bcrypt from "bcryptjs"

const data = {
 users: [
  {
   name: "Arigbede Omobolaji",
   email: "arigbedeomobolaji@gmail.com",
   password: bcrypt.hashSync("12345", 8),
   isAdmin: true
  },
  {
   name: "Awogboro Ojo",
   email: "awogboroojo@gmail.com",
   password: bcrypt.hashSync("12345", 8),
   isAdmin: false
  },
  {
   name: "Arigbede Olayinka",
   email: "arigbedeolayinka@gmail.com",
   password: bcrypt.hashSync("12345678", 8)
  }
 ],
 products: [
  {
   name: "Nike Pants & Shirt",
   category: "shirt",
   image: "/images/p1.jpg",
   price: 120,
   brand: "Nike",
   rating: 4.5,
   numReviews: 10,
   description: "High quality material",
   countInStock: 10
  },{
   name: "Adidas Shirt",
   category: "shirt",
   image: "/images/p2.jpg",
   price: 100,
   brand: "Adidas",
   rating: 1.0,
   numReviews: 101,
   description: "High quality material",
   countInStock: 12
  },{
   name: "Puma Shirt",
   category: "shirt",
   image: "/images/p3.jpg",
   price: 80,
   brand: "Puma",
   rating: 2.0,
   numReviews: 1100,
   description: "High quality material",
   countInStock: 0
  },{
   name: "Nike Pant",
   category: "pants",
   image: "/images/p4.jpg",
   price: 200,
   brand: "Nike",
   rating: 3.5,
   numReviews: 20,
   description: "High quality material",
   countInStock: 14
  },{
   name: "Adidas Pants",
   image: "/images/p5.jpg",
   category: "pants",
   brand: "Adidas",
   description: "High quality material",
   price: 120,
   rating: 3.0,
   numReviews: 10,
   countInStock: 0
  },{
   name: "Puma Pants",
   category: "pants",
   image: "/images/p6.jpg",
   price: 45,
   brand: "Puma",
   rating: 5.0,
   numReviews: 5,
   description: "High quality material",
   countInStock: 20
  }
 ]
}

export default data