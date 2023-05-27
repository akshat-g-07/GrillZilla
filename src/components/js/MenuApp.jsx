import React, { useState } from "react";
import RotatingDisc from "./RotatingDisc";
import MenuDetails from "./MenuDetails";

const MenuApp = () => {
  const [menuType, setMenuType] = useState("Burger");
  return (
    <>
      <RotatingDisc setMenuType={setMenuType} />
      <MenuDetails menuTypeId={menuType} />
    </>
  );
};

export default MenuApp;
