import React, { useRef, useEffect, useState } from "react";

function Map({ center, zoom }) {
  const ref = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    if (ref.current && !mapInstance) {
      const newMap = new window.google.maps.Map(ref.current, {
        center: center,
        zoom: zoom,
      });

      setMapInstance(newMap);
    }

    if (mapInstance) {
      mapInstance.setCenter(center);
      mapInstance.setZoom(zoom);
    }
  }, [ref, mapInstance, center, zoom]);

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "500px", borderRadius: "10px" }}
    />
  );
}

export default Map;
