import React, { useState } from "react";
import "../css/LocationStateOpened.css";

const LocationCity = ({ cityValue }) => {
  const [selected, setselected] = useState(false);
  return (
    <div
      className={selected ? "locationcity selected" : "locationcity"}
      onClick={() => {
        setselected(!selected);
      }}
    >
      {cityValue}
    </div>
  );
};

export default LocationCity;
