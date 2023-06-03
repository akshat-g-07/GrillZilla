import React, { useEffect, useState } from "react";
import "../css/ChefDetails.css";
import "../css/ChefDetailsMedia.css";
import Chefs from "../json/Chefs.json";

const ChefDetails = ({ chefNameSelected }) => {
  const [imGURL, setImgURL] = useState();

  useEffect(() => {
    Chefs.map((chef) => {
      chef.name === chefNameSelected && setImgURL(chef.url);
    });
  }, [chefNameSelected]);

  return (
    <>
      <div className="chefdetailholder">
        <div className="chefname">{chefNameSelected}</div>
        <div className="chefphoto">
          <img src={imGURL} />
        </div>
        <div className="chefdetails">
          {Chefs.map((chef) => {
            return chef.name === chefNameSelected && chef.description;
          })}
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
