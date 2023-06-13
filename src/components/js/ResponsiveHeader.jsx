import React from "react";
import "../css/ResponsiveHeader.css";
import "../css/HeaderMedia768.css";
import "../css/HeaderMedia1300.css";
import ResponsiveNavBar from "./ResponsiveNavBar";

const ResponsiveHeader = () => {
  return (
    <>
      <button
        onClick={() => {
          document
            .querySelector(".plate_bg.responsive")
            .classList.add("show_bg");
          document
            .querySelectorAll(".headerbutton")[1]
            .classList.add("closeleft");
          document
            .querySelectorAll(".headerbutton")[0]
            .classList.remove("openleft");
        }}
        className="headerbutton openleft"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <button
        onClick={() => {
          document
            .querySelector(".plate_bg.responsive")
            .classList.remove("show_bg");
          document
            .querySelectorAll(".headerbutton")[1]
            .classList.remove("closeleft");
          document
            .querySelectorAll(".headerbutton")[0]
            .classList.add("openleft");
        }}
        className="headerbutton"
      >
        <i className="fa-solid fa-circle-xmark"></i>
      </button>

      <header className="headerclass">
        <div className="logoname responsive">GrillZilla</div>
        <ResponsiveNavBar />
      </header>

      <button
        onClick={() => {
          document.querySelector(".headerclass").classList.add("responsive");
          document.querySelector(".navbar").classList.add("responsive");
          document
            .querySelectorAll(".headerbutton")[2]
            .classList.add("closeright");
          document
            .querySelectorAll(".headerbutton")[3]
            .classList.remove("openright");
        }}
        className="headerbutton openright"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  );
};

export default ResponsiveHeader;
