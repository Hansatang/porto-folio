import "./Sidebar.scss";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="personal-card reactive-hide">
        <a href="/" className="personal-info">
          <div className="personal-photo"></div>
          <div className="personal-content ">
            <h1 className="personal-name">Krzysztof Pacierz</h1>
            <h2 className="personal-title">Software Developer Graduate</h2>
          </div>
        </a>
      </div>
      <div className="navigation">
        <Navbar expand="md" variant="dark" className="d-md-none">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <CustomNavLink to="/">Home </CustomNavLink>
              <CustomNavLink to="/about">About </CustomNavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Nav className="flex-column d-none d-md-block">
          <CustomNavLink to="/">Home </CustomNavLink>
          <CustomNavLink to="/about">About </CustomNavLink>
        </Nav>
      </div>
      <div className="social">
        <div className="social-text reactive-hide">Get in touch</div>
        <div className="social-content">
          <div className="social-icons">
            <a
              rel="me"
              href="https://github.com/Hansatang?tab=repositories"
              className="button button-icon u-email"
              title="Github"
            >
              <div>Github</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
