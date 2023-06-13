import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBarCursor.css";

const ResponsiveNavBar = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX - 20);
    setCursorY(e.clientY - 20);
  });

  return (
    <nav className="navbar">
      <NavLink className="navlink responsive" to="/menu">
        Menu
      </NavLink>
      <NavLink className="navlink responsive" to="/chefs">
        Our Chefs
      </NavLink>
      <NavLink className="navlink responsive" to="/locations">
        Our Locations
      </NavLink>
      <NavLink className="navlink responsive" to="/clients">
        Our Clients
      </NavLink>
      <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div>

      <button
        onClick={() => {
          document.querySelector(".headerclass").classList.remove("responsive");
          document.querySelector(".navbar").classList.remove("responsive");
          document
            .querySelectorAll(".headerbutton")[2]
            .classList.remove("closeright");
          document
            .querySelectorAll(".headerbutton")[3]
            .classList.add("openright");
        }}
        className="headerbutton"
      >
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </nav>
  );
};

export default ResponsiveNavBar;
