import React, { useEffect, useState } from "react";
import "../css/SearchTag.css";

const LocationSearch = ({ setStateCityKey }) => {
  const [expand, setExpand] = useState(false);
  const [inputStringValue, setInputStringValue] = useState("");

  expand
    ? (() => {
        document.querySelector(".searchbar") &&
          (document.querySelector(".searchbar").style.width = "15rem");
        document.querySelector(".searchtag") &&
          (document.querySelector(".searchtag").style.opacity = 1);
        document.querySelector(".searchtag") &&
          document.querySelector(".searchtag").focus();
      })()
    : (() => {
        document.querySelector(".searchbar") &&
          (document.querySelector(".searchbar").style.width = "2rem");
        document.querySelector(".searchtag") &&
          (document.querySelector(".searchtag").style.opacity = 0);
      })();

  useEffect(() => {
    setStateCityKey(inputStringValue);
  }, [inputStringValue]);

  return (
    <div className="searchbar">
      <input
        className="searchtag"
        type="text"
        placeholder="Search Locations :"
        value={inputStringValue}
        onChange={(event) => {
          setInputStringValue(event.target.value);
        }}
      ></input>
      <button
        className="searchbtn"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default LocationSearch;
