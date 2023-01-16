
const express = require('express')
const router = express.Router()

// import both these functions from controllers
const {login, register} = require('../controllers/auth')
router.post('/register', register)
router.post('/login', login)


module.exports = router