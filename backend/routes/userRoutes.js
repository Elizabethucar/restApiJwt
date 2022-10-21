const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getOneUser} = require('../controller/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getOne', protect, getOneUser)

module.exports= router