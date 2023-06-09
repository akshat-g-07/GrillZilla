import React, { useState } from "react";
import LocationState from "./LocationState";
import "../css/LocationHolder.css";
import LocationSearch from "./LocationSearch";
import LocationSearchFunction from "./LocationSearchFunction";

const LocationList = () => {
  const [stateCityKey, setStateCityKey] = useState("");
  const filteredStateCity = LocationSearchFunction({ stateCityKey });

  return (
    <>
      <img className="plate_bg" src="images/plate_bg.png" alt=""></img>
      <div className="searchbefore">Our Locations are:</div>
      <LocationSearch setStateCityKey={setStateCityKey} />
      <div className="locationholder">
        {filteredStateCity.map((item) => {
          return <LocationState stateCityValue={item} key={item.state} />;
        })}
      </div>
    </>
  );
};

export default LocationList;
