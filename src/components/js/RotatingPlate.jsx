import React from "react";
import "../css/RotatingDisc.css";
import RotatingItems from "./RotatingItems";

const RotatingPlate = ({ setMenuType, radius, angle, rotationAngle }) => {
  return (
    <>
      <div style={{ height: "4500px" }}>
        <div className="holder">
          <img
            className="plate"
            src="images/plate.png"
            alt=""
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          ></img>
          <img className="plate_bg" src="images/plate_bg.png" alt=""></img>
          <RotatingItems
            setMenuType={setMenuType}
            radius={radius}
            angle={angle}
            rotationAngle={rotationAngle}
          />
        </div>
        <div className="menuholder">
          <img className="menu_bg" src="images/menu_bg.png" alt=""></img>
          <img
            className="menu_select"
            src="images/menu_select.png"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default RotatingPlate;
