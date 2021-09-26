import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/makeres">MAKE RESERVATION</Link>
        </li>
        <li>
          <Link to="/showres">SHOW RESERVATION</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
