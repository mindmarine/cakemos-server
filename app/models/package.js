const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  cost: {
    type: Number,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('package', packageSchema)
