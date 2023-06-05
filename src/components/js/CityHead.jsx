import React from "react";

const CityHead = ({ classValue, cityName }) => {
  return (
    <>
      <div className={classValue}>{cityName}</div>
    </>
  );
};

export default CityHead;
