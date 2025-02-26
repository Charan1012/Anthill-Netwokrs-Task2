const Booking = require('../models/Booking');

const bookBus = async (req, res) => {
    const { busId, seats } = req.body;
    try {
        const booking = new Booking({ user: req.user.userId, bus: busId, seats });
        await booking.save();
        res.status(201).json({ message: 'Bus booked successfully', booking });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const cancelBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findByIdAndUpdate(id, { status: 'cancelled' }, { new: true });
        res.json({ message: 'Booking cancelled successfully', booking });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { bookBus, cancelBooking };