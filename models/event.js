const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
  time: {type:Numbers},
  location: {type:Location}
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
