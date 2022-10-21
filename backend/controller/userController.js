const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req,res)=>{
  const {name, email,password} = req.body

  if(!name || !email || !password){
  res.status(400)
  throw new Error('please add all fields')
  }
  res.json({message: 'Register user'})
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