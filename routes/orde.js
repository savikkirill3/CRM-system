const express = require('express')
const controller = require('../controllers/orde')
const router = express.Router()


router.get('/', controller.getAll)
router.get('/', controller.create)


module.exports = router