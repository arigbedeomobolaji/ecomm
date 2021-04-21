import jwt from "jsonwebtoken"

export const generateAuthToken = (user) => {
  const token = jwt.sign(
   { email: user.email, isAdmin: user.isAdmin, _id: user._id },
   process.env.JWT_SECRET,
   {
    expiresIn: "30d"
   }
  )
   return token
}