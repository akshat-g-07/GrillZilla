import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink className="navlink" to="/menu">
        Menu
      </NavLink>
      <NavLink className="navlink" to="/chefs">
        Our Chefs
      </NavLink>
      <NavLink className="navlink" to="/locations">
        Our Locations
      </NavLink>
      <NavLink className="navlink" to="/clients">
        Our Clients
      </NavLink>
    </nav>
  );
};

export default NavBar;
