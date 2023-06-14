import React from "react";
import { itemTypes } from "./ItemType";

const RotatingItems = ({ setMenuType, radius, angle, rotationAngle }) => {
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
  return <div className="itemholder">{updatedItemTypes}</div>;
};

export default RotatingItems;
