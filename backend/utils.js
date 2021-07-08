import expressAsyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"

export const generateAuthToken = (user) => {
  const token = jwt.sign(
   { 
     email: user.email, 
     isAdmin: user.isAdmin, 
     _id: user._id },
   process.env.JWT_SECRET,
   {
    expiresIn: "1d"
   }
  )
   return token
}

export const verifyAuthToken = expressAsyncHandler(async(req, res, next) => {
  const authToken = req.headers.authorization.replace("Bearer ", "")
  if(!authToken){
    return res.status(404).send({"error": "No auth token found."})
  }
  jwt.verify(authToken, process.env.JWT_SECRET, (error, decoded) => {
    if(!error && decoded._id){
      req.user = decoded
      next()
    }else{
      return res.status(401).send({"error": "Invalid token"})
    }
  })
})