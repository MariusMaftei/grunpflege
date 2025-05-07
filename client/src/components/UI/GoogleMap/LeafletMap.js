import { useEffect, useRef } from "react";
import styles from "./LeafletMap.module.css";

export default function LeafletMap({
  address = "123 Garden Street, Green City, GC 12345",
}) {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    // Only import Leaflet on the client side
    const loadMap = async () => {
      // Dynamically import leaflet
      const L = await import("leaflet");

      // Import leaflet CSS
      import("leaflet/dist/leaflet.css");

      // Default coordinates (New York City)
      const defaultPosition = [40.712776, -74.005974];

      // Initialize map if it doesn't exist yet
      if (!mapRef.current) {
        mapRef.current = L.map(mapContainerRef.current).setView(
          defaultPosition,
          15
        );

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(mapRef.current);

        // Create a green marker icon
        const greenIcon = L.icon({
          iconUrl:
            "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        // Add marker
        markerRef.current = L.marker(defaultPosition, {
          icon: greenIcon,
        }).addTo(mapRef.current);

        // Add popup with business info
        popupRef.current = L.popup().setContent(`
            <div class="${styles.popupContent}">
              <h3 class="${styles.popupTitle}">Cristian Cionabu Gardening</h3>
              <p class="${styles.popupAddress}">${address}</p>
              <a 
                href="https://www.openstreetmap.org/directions?from=&to=${defaultPosition[0]}%2C${defaultPosition[1]}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="${styles.popupLink}"
              >
                Get Directions
              </a>
            </div>
          `);

        markerRef.current.bindPopup(popupRef.current);
      }
    };

    loadMap();

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [address]);

  return (
    <div className={styles.mapContainer}>
      <div ref={mapContainerRef} className={styles.map}></div>
    </div>
  );
}
