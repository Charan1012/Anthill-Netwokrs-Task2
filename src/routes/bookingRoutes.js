const express = require('express');
const { authenticate } = require('../middleware/auth');
const { bookBus, cancelBooking } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', authenticate, bookBus);
router.delete('/:id', authenticate, cancelBooking);

module.exports = router;