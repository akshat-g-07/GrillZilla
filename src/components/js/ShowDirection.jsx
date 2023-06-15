import React, { useEffect } from "react";
import DirectionsAPI from "./DirectionsAPI";
import "../css/MapButton.css";

const ShowDirection = ({
  showDirection,
  setShowDirection,
  keyValue,
  latitude,
  longitude,
}) => {
  useEffect(() => {
    showDirection
      ? (() => {
          const directionHolder =
            document.querySelectorAll(".directionholder")[keyValue];
          if (directionHolder) {
            directionHolder.style.height = "22.5rem";
            directionHolder.style.width = "52rem";
            directionHolder.style.top = "3.5rem";
            directionHolder.style.right = "0rem";
          }
        })()
      : (() => {
          const directionHolder =
            document.querySelectorAll(".directionholder")[keyValue];
          if (directionHolder) {
            directionHolder.style.height = "0px";
            directionHolder.style.width = "0px";
          }
        })();
  }, [showDirection]);

  return (
    <div
      className="directionholder"
      style={{
        boxShadow: "2px 5px 15px black",
        backgroundColor: "blue",
        transition: "all 0.5s",
        zIndex: 5,
        position: "absolute",
        borderRadius: "2% 2% 5% 5%",
        overflow: "hidden",
      }}
    >
      <button
        className="mapbutton back"
        onClick={() => {
          setShowDirection(!showDirection);
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <DirectionsAPI destLatValue={latitude} destLongValue={longitude} />
    </div>
  );
};

export default ShowDirection;
