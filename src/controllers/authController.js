const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateAccessToken, generateRefreshToken } = require('../utils/token');

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const accessToken = generateAccessToken(user._id, user.role);
        const refreshToken = generateRefreshToken(user._id);
        user.refreshToken = refreshToken;
        await user.save();
        res.json({ accessToken, refreshToken });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: 'Refresh token is required' });

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user || user.refreshToken !== refreshToken) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }

        const accessToken = generateAccessToken(user._id, user.role);
        res.json({ accessToken });
    } catch (err) {
        res.status(401).json({ message: 'Invalid refresh token' });
    }
};

module.exports = { register, login, refreshToken };