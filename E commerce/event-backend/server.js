const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/event');
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// Sequelize sync
const sequelize = require('./config/db');
sequelize.sync().then(() => console.log('Database synced'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));