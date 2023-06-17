import React from "react";
import CityFilter from "./CityFilter";
import MapAPI from "./MapAPI";

const UserCityBody = ({ userCityValue }) => {
  const filteredPlacesValues = CityFilter({ userCityValue });
  return (
    <>
      {filteredPlacesValues.map((item, index) => {
        return (
          <div
            className={index % 2 === 0 ? "mapdataholdAer even" : "mapdataholder"}
            key={index}
          >
            <MapAPI latValue={item[0]} longValue={item[1]} keyValue={index} />
            <div className="placename">{item[2]}</div>
          </div>
        );
      })}
    </>
  );
};

export default UserCityBody;
