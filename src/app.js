const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const busRoutes = require('./routes/busRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

// const result = dotenv.config();

// if (result.error) {
//   console.error('Error loading .env file:', result.error);
// } else {
//   console.log('.env file loaded successfully');
// }


const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);
console.log('REFRESH_TOKEN_SECRET:', process.env.REFRESH_TOKEN_SECRET);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/bookings', bookingRoutes);


app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));