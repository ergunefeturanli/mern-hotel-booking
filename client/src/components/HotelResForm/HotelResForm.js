import axios from "axios"

import { useState } from "react";

const HotelResForm = (props) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const selectedHotel = props.selectedHotel


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/reservation",{
        name: e.target.name.value,
        surname: e.target.surname.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        guessCount: e.target.guessCount.value,
        checkInDate: e.target.checkInDate.value,
        checkOutDate: e.target.checkOutDate.value,
        hotel: selectedHotel
      })
      setError(false)
      setSuccess(true)
    } catch (error) {
      setError(true)
    }
  };

  return (
    <div>
      <h1>{props.selectedHotel}</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Your Name</label>
        <input id="name" required={true} type="text" placeholder="Name" />

        <label htmlFor="surname">Your Surname</label>
        <input id="surname" required={true} type="text" placeholder="Surname" />

        <label htmlFor="phone">Your Phone Number</label>
        <input id="phone" required={true} type="number" placeholder="Phone Number" />

        <label htmlFor="email">Your Email Adress</label>
        <input id="email" required={true} type="email" placeholder="E-Mail" />

        <label htmlFor="guessCount">Guess Count</label>
        <input id="guessCount" required={true} type="number" placeholder="Number" />

        <label htmlFor="checkInDate">Check In Date</label>
        <input id="checkInDate" required={true} type="date" />

        <label htmlFor="checkOutDate">Check Out Date</label>
        <input id="checkOutDate" required={true} type="date" />

        <button type="submit">Make Reservation</button>
      </form>
      {error && <h3>Something Went Wrong</h3>}
      {success && <h3>Success!</h3>}
    </div>
  );
};

export default HotelResForm;
