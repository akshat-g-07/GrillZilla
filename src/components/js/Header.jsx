import React from "react";
import "../css/Header.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header>
        <div className="logoname">GrillZilla</div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
