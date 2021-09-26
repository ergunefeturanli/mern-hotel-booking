const mongoose = require("mongoose");
const validator = require('validator')

const ReservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  surname: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
          throw new Error('Email is invalid')
      }
  }
  },
  guessCount: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
          throw new Error('Guess Count must be a positive number!')
      }
  }
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  reservationNumber: {
    type: Number,
    // required: true,
  },
  hotel: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
