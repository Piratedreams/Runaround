const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
  eventName: {type: String, required: true},
  time: {type: Number, required: true},
  location: {type: String, required: true},
  entranceFee: {type: Number, required: true},
  RSVP: {type: Boolean, required: true}
});

const Event = mongoose.model('Event', eventSchema)

module.exports = Event;
