const Event = require('../models/Event');
const Booking = require('../models/Booking');

exports.createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
};

exports.getEvents = async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
};

exports.bookEvent = async (req, res) => {
  const { userId, eventId } = req.body;
  const booking = await Booking.create({ UserId: userId, EventId: eventId });
  res.json(booking);
};