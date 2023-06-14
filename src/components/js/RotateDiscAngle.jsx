import React, { useEffect } from "react";

const RotateDiscAngle = ({ setRotationAngle }) => {
  useEffect(() => {
    const handleScroll = () => {
      setRotationAngle(window.scrollY / 5);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return <></>;
};

export default RotateDiscAngle;
