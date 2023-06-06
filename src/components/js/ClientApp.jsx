import React from "react";
import Testimonials from "../json/Testimonials.json";
import "../css/ClientApp.css";
import "../css/ClientAppMedia.css";
import { motion } from "framer-motion";

const ClientApp = () => {
  return (
    <div className="testimonialholder">
      {Testimonials.map((item, index) => {
        return (
          <motion.div
            key={index}
            className="testimonial"
            style={{ backgroundImage: " url('images/notepad.png')" }}
            whileHover={{
              scale: 1.25,
              rotateZ: ["-20deg", "10deg", "-20deg", "10deg"],
              transition: {
                duration: 0.25,
              },
            }}
          >
            <p> {item.testimonial}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ClientApp;
