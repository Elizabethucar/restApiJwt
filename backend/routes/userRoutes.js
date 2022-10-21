const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getOneUser} = require('../controller/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getOne', getOneUser)

module.exports= router