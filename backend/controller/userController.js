const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const registerUser = asyncHandler(async (req,res)=>{
  const {name, email, password} = req.body

  if(!name || !email || !password){
  res.status(400)
  throw new Error('please add all fields')
  }
  //check if userExist
  const userExists = await User.findOne({email})
  if(userExists) {
  res.status(400)
  throw new Error('user already exist')
  }
  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword=await bcrypt.hash(password, salt)
  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })
 if(user){
  res.status(201).json({
    _id: user.id,
    name: user.name,
    email: user.email
  })
 }else{
  res.status(400)
  throw new Error('Invalid user Data')
 }
})

const loginUser =asyncHandler (async (req,res)=>{
  res.json({message: 'login user'})
})

const getOneUser = asyncHandler (async(req,res)=>{
  res.json({message: 'get one user'})
})

module.exports = {
  registerUser,
  loginUser,
  getOneUser
}