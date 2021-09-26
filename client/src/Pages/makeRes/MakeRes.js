import axios from "axios";

import { useEffect, useState } from "react";
import HotelsList from "../../components/hotelsList/HotelsList";

const MakeRes = () => {
  const [hotelsArray, setHotelsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let query = {
      name: searchText,
    };
    getHotels(query)
      .then((res) => {
        setHotelsArray(res.data);
      })
      .catch((err) => {
        console.err(err);
        setHotelsArray([]);
      });
  };

  const getHotels = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .get("/hotel", {
          params: data,
        })
        .then((res) => {
          setHotelsArray(res.data);
          resolve(res);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  useEffect(() => {
    getHotels();
    setLoading(true);
  }, []);

  return (
    <div>
      <form action="submit" onSubmit={submitHandler}>
        <input
          type="text"
          id="filter"
          placeholder="Hotel Name"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <span>Make Reservation</span>
      {loading && <h3>Loading...</h3>}

      {!loading && <HotelsList hotels={hotelsArray} />}
    </div>
  );
};

export default MakeRes;
