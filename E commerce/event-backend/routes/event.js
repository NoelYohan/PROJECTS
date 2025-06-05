const express = require('express');
const router = express.Router();
const { createEvent, getEvents, bookEvent } = require('../controllers/eventController');

router.post('/create', createEvent);
router.get('/', getEvents);
router.post('/book', bookEvent);

module.exports = router;