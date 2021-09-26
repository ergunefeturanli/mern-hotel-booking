const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true,
    unique: true
  },
  isAvailable:{
    type: Boolean,
    required: true,
    default: true
  }
})

module.exports = mongoose.model('Hotel', HotelSchema)