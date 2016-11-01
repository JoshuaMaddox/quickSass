const express = require('express')
const router = express.Router()

// connect other routers here!
router.use('/users', require('./users'))
router.use('/groups', require('./groups'))

module.exports = router
