import { useState } from "react";

import HotelResForm from "../HotelResForm/HotelResForm";

const HotelsList = (props) => {
  const [selectedHotel, setSelectedHotel] = useState();
  
  const onHotelSelect = (e) => {
    setSelectedHotel(e.target.outerText)
  }


  return (
    <div>
      <ul>
        {props.hotels && props.hotels.map((hotel) => (
          <button key={hotel.name} onClick={onHotelSelect} >{hotel.name}</button>
        ))}
      </ul>
      {selectedHotel && (
        <HotelResForm selectedHotel ={selectedHotel} />
      )}
    </div>
  );
};

export default HotelsList;
