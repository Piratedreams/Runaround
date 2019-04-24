const mongoose = require('mongoose');

const runnerSchema = mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  gender: {type: String, required: true}
});

const Runner = mongoose.model('Runner', runnerSchema);

module.exports = Runner;