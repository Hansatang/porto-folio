import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="header">
      <div className="desktop">
        <div className="left_nav">Hello</div>
        <ul className="nav_list">
          <li className="nav_list_item">
            <div>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "red",
                })}
              >
                Home
              </NavLink>
            </div>
          </li>
          <li className="nav_list_item">
            <div>
              <NavLink
                to="/Swirl"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "red",
                })}
              >
                About
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
