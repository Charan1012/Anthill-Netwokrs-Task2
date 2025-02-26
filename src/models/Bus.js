const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    busNumber: { type: String, required: true, unique: true },
    capacity: { type: Number, required: true },
    routes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Route' }]
});

module.exports = mongoose.model('Bus', busSchema);