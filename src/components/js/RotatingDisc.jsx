import React, { useState, useEffect } from "react";
import "../css/RotatingDisc.css";
import { itemTypes } from "./ItemType";

const RotatingDisc = ({ setMenuType }) => {
  const radius = 16;
  const angle = 360 / 6;
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotationAngle(window.scrollY / 5);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rotationAngle]);

  const updatedItemTypes = itemTypes.map((item) => {
    let itemAngle = item.id * angle;
    let x = radius * Math.cos((itemAngle + rotationAngle) * (Math.PI / 180));
    let y = radius * Math.sin((itemAngle + rotationAngle) * (Math.PI / 180));

    return (
      <i
        key={item.key}
        className={item.className}
        style={{
          position: "absolute",
          top: `${y}rem`,
          left: `${x}rem`,
          fontSize: x === 16 ? "7.5rem" : "5rem",
          animation: x === 16 ? "vibrate 0.5s ease-out" : "",
        }}
      ></i>
    );
  });

  let menuType = updatedItemTypes
    .filter((item) => parseInt(item.props.style.left) === 16)
    .find((item) => true)?.key;
  if (menuType) {
    setMenuType(menuType);
  }

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

          <div className="itemholder">{updatedItemTypes}</div>
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

export default RotatingDisc;
