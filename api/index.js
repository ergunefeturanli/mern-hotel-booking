const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const hotelsRoute =require('./routes/hotels')
const reservationRoute = require('./routes/reservations')
const userRoute = require('./routes/login')
const { ValidationError } = require('express-validation')

dotenv.config();
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use('/api/hotel', hotelsRoute)
  app.use('/api/reservation', reservationRoute)
  app.use('/api/user', userRoute)

  app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
  
    return res.status(500).json(err)
  })

app.listen(port, () => console.log(`Hotel app listening on ${port} port!`));
