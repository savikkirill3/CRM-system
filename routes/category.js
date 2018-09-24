const express = require('express')
const controller = require('../controllers/category')
const router = express.Router()


router.get('/ ', controller.getAll)
router.get('/:id', controller.getGyId)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.patch('/:id', controller.update)


module.exports = router