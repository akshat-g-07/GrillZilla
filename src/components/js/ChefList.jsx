import React, { useState, useEffect } from "react";
import "../css/ChefList.css";
import "../css/ChefMedia.css";
import Chefs from "../json/Chefs.json";
import { AnimatePresence, motion } from "framer-motion";

const ChefList = () => {
  const chefNames = Chefs.map((names) => {
    return names.name;
  });

  const [TopId, setTopId] = useState(0);
  const [MiddleId, setMiddleId] = useState(1);
  const [BottomId, setBottomId] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      TopId === chefNames.length - 1 ? setTopId(0) : setTopId(TopId + 1);
      MiddleId === chefNames.length - 1
        ? setMiddleId(0)
        : setMiddleId(MiddleId + 1);
      BottomId === chefNames.length - 1
        ? setBottomId(0)
        : setBottomId(BottomId + 1);
    }, 4750);

    return () => clearInterval(interval);
  }, [TopId, MiddleId, BottomId]);

  const variants = {
    top: {
      x: ["-10%", "2.5%", "2.5%", "5%"],
      y: ["-100%", "75%", "75%", "350%"],
      scale: [0.8, 1.5, 1.5, 1.75],
      transition: {
        duration: 5,
        times: [0, 0.2, 0.8, 1],
      },
    },

    middle: {
      x: ["0%", "7.5%", "7.5%", "5%"],
      y: ["-200%", "50%", "50%", "350%"],
      scale: [1.75, 2, 2, 1.75],
      transition: {
        duration: 5,
        times: [0, 0.2, 0.8, 1],
        delay: 0,
      },
    },

    bottom: {
      x: ["0%", "2.5%", "2.5%", "-10%"],
      y: ["-200%", "75%", "75%", "375%"],
      scale: [1.75, 1.5, 1.5, 0.8],
      transition: {
        duration: 5,
        times: [0, 0.2, 0.8, 1],
        delay: 0,
      },
    },
  };

  return (
    <>
      <motion.div className="cheflistholder">
        <AnimatePresence initial={false}>
          <div key={TopId} className="chefnameholder first">
            <motion.div
              style={{ transformOrigin: "top left" }}
              variants={variants}
              animate="top"
            >
              {chefNames[BottomId]}
            </motion.div>
          </div>
          <div key={MiddleId} className="chefnameholder second">
            <motion.div
              style={{ transformOrigin: "top left" }}
              variants={variants}
              animate="middle"
            >
              {chefNames[MiddleId]}
            </motion.div>
          </div>
          <div key={BottomId} className="chefnameholder third">
            <motion.div
              style={{ transformOrigin: "top left" }}
              variants={variants}
              animate="bottom"
            >
              {chefNames[TopId]}
            </motion.div>
          </div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ChefList;
