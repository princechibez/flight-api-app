const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getHome)


router.post('/book-flight', controller.postBookFlight)

router.get('/my-flights', controller.getAllFlights)

router.get('/get-flight/:flightId', controller.getSingleFlight)

router.post('/update-flight/:flightId', controller.postUpdateFlight)

router.delete('/delete-flight/:flightId', controller.deleteFlight)

module.exports = router;