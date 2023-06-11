import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "../css/MapAPI.css";
import { motion } from "framer-motion";
import AddressDetails from "./AddressDetails";

const MapAPI = ({ latValue, longValue, keyValue }) => {
  const [mapZoom, setMapZoom] = useState(12.5);
  const [address, setAddress] = useState();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ,
  });

  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { location: { lat: latValue, lng: longValue } },
        (results, status) => {
          if (status === "OK") {
            setAddress(results[0].formatted_address);
          } else {
            setAddress("Address not found");
          }
        }
      );
    }
  }, [isLoaded]);

  return (
    <>
      {isLoaded ? (
        <motion.div
          style={{
            boxShadow: "2px 5px 15px black",
          }}
          whileHover={{
            boxShadow: "2px 5px 15px black",
            scaleX: 1.25,
            scaleY: 1.5,
            // border: "5px solid red",
            zIndex: 2,
          }}
          onHoverStart={() => {
            setMapZoom(15);
            document
              .querySelectorAll(".addressdetails")
              [keyValue]?.classList.remove("hide");
          }}
          onHoverEnd={() => {
            setMapZoom(12.5);
            document
              .querySelectorAll(".addressdetails")
              [keyValue]?.classList.add("hide");
          }}
        >
          <GoogleMap
            zoom={mapZoom}
            center={{ lat: latValue, lng: longValue }}
            clickableIcons={false}
            mapContainerClassName="mapholder"
            options={{
              fullscreenControl: false,
              mapTypeControl: false,
              streetViewControl: false,
              zoomControl: false,
              disableDoubleClickZoom: false,
              scrollwheel: true,
              styles: [
                {
                  featureType: "poi",
                  stylers: [{ visibility: "off" }],
                },
              ],
            }}
          >
            <MarkerF
              position={{
                lat: latValue,
                lng: longValue,
              }}
              animation={window.google.maps.Animation.DROP}
            />
          </GoogleMap>
          <AddressDetails addressValue={address} />
        </motion.div>
      ) : (
        <div>Hey</div>
      )}
    </>
  );
};

export default MapAPI;
