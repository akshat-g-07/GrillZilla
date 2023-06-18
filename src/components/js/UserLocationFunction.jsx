import { useEffect, useState } from "react";
import axios from "axios";

const UserLocationFunction = () => {
  const [currLocation, setCurrLocation] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/city/");
    setCurrLocation(location);
  };

  return currLocation;
};

export default UserLocationFunction;
