import React, { useEffect, useState } from "react";
import "../css/CityShow.css";
import "../css/CityBody.css";
import UserCityHead from "./UserCityHead";
import UserCityBody from "./UserCityBody";
import CityHead from "./CityHead";
import UserLocationFunction from "./UserLocationFunction";

const CityShow = () => {
  const [isInView, setIsInView] = useState(false);
  const userCity = UserLocationFunction();
  useEffect(() => {
    userCity && setIsInView(true);
  }, [userCity]);

  return (
    <>
      <div className="cityshow">
        <div className="cityheadercontainer">
          {userCity && (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsInView(!isInView);
              }}
            >
              <UserCityHead
                classValue={isInView ? "cityheader" : "cityheader inview"}
                userCityValue={userCity}
              />
            </div>
          )}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsInView(!isInView);
            }}
          >
            <CityHead
              classValue={isInView ? "cityheader inview" : "cityheader"}
            />
          </div>
        </div>
        <div className="citybodycontainer">
          {userCity && isInView && <UserCityBody userCityValue={userCity} />}
          {!isInView && <>Hello</>}
        </div>
      </div>
    </>
  );
};

export default CityShow;
