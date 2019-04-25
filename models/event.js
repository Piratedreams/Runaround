const mongoose = require('mongoose');

const eventSchema =  new mongoose.Schema({
  eventName: {type: String, required: true},
  when: {type: Date, required: true},
  location: {type: String, required: true},
  entranceFee: {type: Number, required: true},
  RSVP: {type: Boolean, required: true}
});



module.exports = mongoose.model('Event', eventSchema)
