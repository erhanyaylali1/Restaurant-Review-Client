import { FC, useCallback, useEffect, useState } from "react";
import Geocode from "react-geocode";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface Props {
  address: string;
}

const Map: FC<Props> = ({ address }) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      process.env.REACT_APP_GOOGLE_MAPS_GEO_LOCATION_SECRET_KEY || "",
  });

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_GEO_LOCATION_SECRET_KEY);
  Geocode.setLanguage("en");

  useEffect(() => {
    getCoordinates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const getCoordinates = async () => {
    await Geocode.fromAddress(address).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setCenter({ lat, lng });
    });
  };

  const onLoad = useCallback(
    (map) => {
      if (center) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
      }
    },
    [center]
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  if (center === null || !isLoaded) return null;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  );
};

export default Map;
