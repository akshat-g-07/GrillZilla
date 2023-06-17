import React from "react";

const UserCityHead = ({ classValue, userCityValue }) => {
  return (
    <>
      {userCityValue ? (
        <div className={classValue}>Your City: {userCityValue}</div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default UserCityHead;
