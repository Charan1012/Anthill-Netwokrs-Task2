const Bus = require('../models/Bus');
const Route = require('../models/Route');

const addBus = async (req, res) => {
    const { busNumber, capacity, routes } = req.body;
    try {
        const bus = new Bus({ busNumber, capacity, routes });
        await bus.save();
        res.status(201).json({ message: 'Bus added successfully', bus });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateBus = async (req, res) => {
    const { id } = req.params;
    const { capacity } = req.body;
    try {
        const bus = await Bus.findByIdAndUpdate(id, { capacity }, { new: true });
        res.json({ message: 'Bus updated successfully', bus });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const addRoute = async (req, res) => {
    const { source, destination, distance, duration } = req.body;
    try {
        const route = new Route({ source, destination, distance, duration });
        await route.save();
        res.status(201).json({ message: 'Route added successfully', route });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateRoute = async (req, res) => {
    const { id } = req.params;
    const { distance, duration } = req.body;
    try {
        const route = await Route.findByIdAndUpdate(id, { distance, duration }, { new: true });
        res.json({ message: 'Route updated successfully', route });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { addBus, updateBus, addRoute, updateRoute };