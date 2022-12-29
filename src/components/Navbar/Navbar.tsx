import { NavLink } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
  return (
    <div className="header">
      <div className="desktop">
          <div className="main_option">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "red",
              })}
            >
              Home
            </NavLink>
          </div>
          <div className="option">
            <NavLink
              to="/Swirl"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "red",
              })}
            >
              About
            </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
