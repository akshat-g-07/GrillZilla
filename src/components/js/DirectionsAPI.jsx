import React, { useState, useEffect } from "react";
import { UserLocationFunctionCoords } from "./UserLocationFunction";
import {
  GoogleMap,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";

const DirectionsAPI = ({ destLatValue, destLongValue }) => {
  const userCoords = UserLocationFunctionCoords();
  const srcLatValue = parseFloat(userCoords?.split(",")[0]);
  const srcLongValue = parseFloat(userCoords?.split(",")[1]);

  const [path, setPath] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ,
  });

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();
    srcLatValue &&
      srcLongValue &&
      directionsService.route(
        {
          origin: { lat: srcLatValue, lng: srcLongValue },
          destination: { lat: destLatValue, lng: destLongValue },
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            setPath(response);
          } else {
            console.log("Directions request failed");
            setPath(null);
          }
        }
      );
  }, [srcLatValue, srcLongValue, destLatValue, destLongValue]);

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          center={{ lat: destLatValue, lng: destLongValue }}
          zoom={15}
          mapContainerStyle={{ width: "52rem", height: "22.5rem" }}
          clickableIcons={false}
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
          {path && <DirectionsRenderer directions={path} />}
        </GoogleMap>
      )}
    </div>
  );
};

export default DirectionsAPI;
