const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')

const userController = require('../controllers/user')

router.post('/login',userController.loginController)

router.post('/register',userController.registerController)

router.get('/',authenticate, userController.getAllUserController)

module.exports = router
