import "./Navbar.scss";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

function Navbar() {
  return (
    <div className="sidebar">
      <div className="card">
        <a href="/" className="personal-info">
          <div className="photo"></div>
          <div className="content">
            <h1 className="name">Krzysztof Pacierz</h1>
            <h2 className="title">Software Developer Graduate</h2>
          </div>
        </a>
      </div>
      <nav className="navigation">
        <div className="navigation-extend">
          <ul>
            <li>
              <CustomNavLink to="/">Home</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/About">About</CustomNavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
