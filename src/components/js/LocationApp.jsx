import React from "react";
import LocationList from "./LocationList.jsx";
import CityShow from "./CityShow.jsx";

const LocationApp = () => {
  return (
    <>
      <div className="menuholder">
        <img className="menu_bg" src="images/menu_bg.png" alt=""></img>
        <img className="inner_bg" src="images/inner-bg.png" alt=""></img>
        <img className="background_img" src="images/b1.jfif" alt=""></img>
      </div>
      <LocationList />;
      <CityShow />
    </>
  );
};

export default LocationApp;
