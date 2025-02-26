const Bus = require('../models/Bus');

const searchBuses = async (req, res) => {
    const { source, destination } = req.query;
    try {
        const buses = await Bus.find({}).populate('routes');
        const filteredBuses = buses.filter(bus =>
            bus.routes.some(route =>
                route.source === source && route.destination === destination
            )
        );
        res.json(filteredBuses);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { searchBuses };