const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Event = require('./Event');

const Booking = sequelize.define('Booking', {});

User.hasMany(Booking);
Booking.belongsTo(User);
Event.hasMany(Booking);
Booking.belongsTo(Event);

module.exports = Booking;