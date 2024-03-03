import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import "./CustomNavLink.scss";

const CustomNavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="custom-link"
      style={({ isActive }) => ({
        color: isActive ? "black" : "white",
      })}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
