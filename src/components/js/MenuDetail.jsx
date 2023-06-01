import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "../css/MenuDetail.css";
import { menuItems } from "./MenuItems";

const MenuDetail = ({ menuTypeId }) => {
  const bodyVariant = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const filteredItems = menuItems.filter(
    (menuItem) => menuItem.key === menuTypeId
  );

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [menuTypeId]);

  return (
    <>
      <motion.div className="menufolder">
        <div className="menutype">{menuTypeId}</div>
        <motion.div
          key={key}
          variants={bodyVariant}
          initial="hidden"
          animate="visible"
          className="menubody"
        >
          {filteredItems.map((item) => (
            <motion.div
              className="menudetails"
              key={item.name}
              variants={itemVariant}
              whileHover={{ scale: 1.1 }}
            >
              <div>
                <p className="itemname">{item.name}</p>
                <span className="itemdetail">{item.detail}</span>
              </div>
              <div>
                <p className="itemprice">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default MenuDetail;
