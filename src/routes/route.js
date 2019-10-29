const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/', controller.get)


module.exports = router