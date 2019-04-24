const mongoose = require('mongoose')

const runnerSchema = mongoose.Schema({
  username: {type:String},
  password: {type:String}

})

const Runner = mongoose.model('Runner', runnerSchema)

module.exports = Runner
