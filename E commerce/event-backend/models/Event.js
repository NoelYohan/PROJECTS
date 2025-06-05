const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Event = sequelize.define('Event', {
  title: DataTypes.STRING,
  date: DataTypes.STRING,
  location: DataTypes.STRING,
  seats: DataTypes.INTEGER,
});
module.exports = Event;