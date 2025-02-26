const express = require('express');
const { searchBuses } = require('../controllers/busController');

const router = express.Router();

router.get('/', searchBuses);

module.exports = router;