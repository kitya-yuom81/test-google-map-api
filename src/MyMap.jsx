import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

const containerStyle = { width: "100%", height: "400px" };

export default function MyMap() {
  const mapRef = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      // Create an AdvancedMarkerElement instead of Marker
      const { AdvancedMarkerElement } = window.google.maps.marker;
      new AdvancedMarkerElement({
        map: mapRef.current,
        position: { lat: 11.5564, lng: 104.9282 }, // Phnom Penh
        title: "Our Location",
      });
    }
  }, [isLoaded]);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 11.5564, lng: 104.9282 }}
        zoom={13}
        onLoad={(map) => (mapRef.current = map)}
      />
    )
  );
}
