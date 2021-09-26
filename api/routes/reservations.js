const router = require("express").Router();
const Reservation = require("../models/Reservation");

router.post("/",async (req,res) => {
  try {
    const newReservation = new Reservation({
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
      guessCount: req.body.guessCount,
      checkInDate: req.body.checkInDate,
      checkOutDate: req.body.checkOutDate,
      reservationNumber: req.body.reservationNumber,
      hotel: req.body.hotel
    })

    const reservation = await newReservation.save()
    res.status(201).json(reservation)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find()
    res.status(200).json(reservations)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
