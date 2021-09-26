const router = require("express").Router();
const Hotel = require("../models/Hotel");
const hotelUtils = require("../utils/hotelUtils");
const { validate, Joi } = require('express-validation')

const hotelSearchValidation = {
  body: Joi.object({
    name: Joi.string()
  })
}

router.post("/", async (req, res) => {
  try {
    const newHotel = new Hotel({
      name: req.body.name,
      isAvailable: req.body.isAvailable
    })

    const hotel = await newHotel.save()
    res.status(201).json(hotel)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get("/", validate(hotelSearchValidation, {}, {}),  async (req, res) => {
  try {
    const hotels = await hotelUtils.searchHotels(req.query);
    res.status(200).json(hotels)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})

module.exports = router
