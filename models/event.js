const mongoose = require('mongoose');

const eventSchema =  new mongoose.Schema({
  eventName: {type: String, required: true},
  when: {type: Date, required: true},
  location: {type: String, required: true},
  entranceFee: {type: Number, required: true},
  RSVP: {type: Boolean}
});



module.exports = mongoose.model('Event', eventSchema)
