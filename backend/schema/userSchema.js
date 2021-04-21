import mongoose from "mongoose"
const Schema = mongoose.Schema

const userSchema = new Schema({
 name: {
  type: String,
  required: true
 },
 email: {
  type: String,
  required: true,
  unique: true
 },
 password: {
  type: String,
  required: true
 },
 isAdmin: {
  type: Boolean,
  default: false
 }
}, {
 timestamps: true
})

export default userSchema