const express = require('express');
const { authenticate } = require('../middleware/auth');
const { addBus, updateBus, addRoute, updateRoute } = require('../controllers/adminController');

const router = express.Router();

// Admin routes
router.post('/buses', authenticate, addBus);
router.put('/buses/:id', authenticate, updateBus);
router.post('/routes', authenticate, addRoute);
router.put('/routes/:id', authenticate, updateRoute);

module.exports = router;