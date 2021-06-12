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
    expiresIn: "30d"
   }
  )
   return token
}

export const verifyAuthToken = expressAsyncHandler(async(req, res, next) => {
  const authToken = req.headers.authorization.replace("Bearer ", "")
  if(!authToken){
    return res.status(404).send({"error": "No auth token found."})
  }
  try{
    const decoded = await jwt.verify(authToken, porcess.env.JWT_SECRET)
    req.user = decoded
    next()
  }catch(e){
    return res.status(401).send({"error": "Invalid token"})
  }
})