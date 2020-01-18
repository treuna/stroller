const express = require('express')

const StrollerCtrl = require('../controllers/stroller-ctrl')

const router = express.Router()

router.post('/stroller', StrollerCtrl.createStroller)
router.put('/stroller/:id', StrollerCtrl.updateStroller)
router.delete('/stroller/:id', StrollerCtrl.deleteStroller)
router.get('/stroller/:id', StrollerCtrl.getStrollerById)
router.get('/strollers', StrollerCtrl.getStrollers)

module.exports = router