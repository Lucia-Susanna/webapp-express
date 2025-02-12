const express = require('express')
const router = express.Router()
const controller = require('../controllers/moviesController')

router.get('/', controller.index)
router.get('/:id', controller.show)
router.post('/:id/reviews', controller.storeReview)

module.exports = router