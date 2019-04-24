const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
  time: {type:Number},
  location: {type:String}
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
