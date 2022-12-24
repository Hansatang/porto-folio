import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
        <div className="desktop">
        <ul>
        <li className="option" >
            <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'red' })}>
                            Home
                        </NavLink>
            </li>
            <li className="option" >
            <NavLink to="/Swirl" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'red' })}>
                            About
                        </NavLink>
            </li>
        </ul>
    </div>
    </div>
  );
}

export default Navbar;
