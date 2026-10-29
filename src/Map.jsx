import { MapContainer, TileLayer, CircleMarker, Popup, GeoJSON} from "react-leaflet";
import Button from '@mui/material/Button';

import data from "./assets/4.5_week.geojson.json";
import data1 from "./assets/plate_boundaries.geojson.json";
import { blue } from "@mui/material/colors";

export const Map = ({setFocus, size}) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[15, 0]}
      zoom={3}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        attribution="&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data)"
      />
      <GeoJSON data={data1} />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          pathOptions={{ color: "red" }}
          radius={d.properties.mag ** size}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
              <Button variant="outlined" size="small" color="info" onClick={() => setFocus({d})}>Mehr Details</Button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
