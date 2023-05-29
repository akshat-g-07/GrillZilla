import React, { useState, useEffect, useRef } from "react";
import "../css/MenuDetail.css";
import "../css/MenuDetailAnimation.css";
import { menuItems } from "./MenuItems";

const MenuDetail = ({ menuTypeId }) => {
  let scrollY = useRef(0);

  const [menuTypeIdDelay, setMenuTypeIdDelay] = useState();

  useEffect(() => {
    const menuFolder = document.querySelector(".menufolder");

    menuFolder.classList.add("going");
    setTimeout(() => {
      menuFolder.classList.remove("going");
      setMenuTypeIdDelay(menuTypeId);
    }, 500);

    if (scrollY.current <= window.scrollY) {
      menuFolder.classList.add("comingup");
      setTimeout(() => {
        menuFolder.classList.remove("comingup");
      }, 2000);
    } else {
      menuFolder.classList.add("comingdown");
      setTimeout(() => {
        menuFolder.classList.remove("comingdown");
      }, 2000);
    }

    scrollY.current = window.scrollY;
  }, [menuTypeId]);

  const filteredItems = menuItems.filter(
    (menuItem) => menuItem.key === menuTypeIdDelay
  );

  return (
    <>
      <div className="menufolder">
        <div className="menutype">{menuTypeIdDelay}</div>
        <div className="menubody">
          {filteredItems.map((item) => (
            <div className="menudetails" key={item.name}>
              <div>
                <p className="itemname">{item.name}</p>
                <span className="itemdetail">{item.detail}</span>
              </div>
              <div>
                <p className="itemprice">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuDetail;
