import axios from "axios";

import { useEffect, useState } from "react";
import Login from "../../components/login/Login";
import ResList from "../../components/ResList/ResList";

const ShowRes = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resArray, setResArray] = useState([]);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/user/login", {
        username: e.target.username.value,
        password: e.target.password.value,
      });

      setError(false);
      setIsLoggedIn(true);
    } catch (err) {
      setError(true);
    }

    console.log(e.target.username.value);
  };

  useEffect(() => {
    getRes();
    setLoading(true);
  }, []);

  const getRes = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("/reservation")
        .then((res) => {
          setResArray(res.data);
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

  return (
    <>
      {isLoggedIn && (
        <div
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          <ResList list={resArray} /> <button>Logout</button>
        </div>
      )}
      {!isLoggedIn && (
        <div>
          <h2>Login</h2>
          <form onSubmit={submitHandler}>
            <label>Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username..."
              required
            />
            <label>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password..."
              required
            />
            <button type="submit">Login</button>
            {error && <h3>Something Went Wrong...</h3>}
          </form>
        </div>
      )}
      {loading && <h3>Loading...</h3>}
    </>
  );
};

export default ShowRes;
