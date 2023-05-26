import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AirportMarkService from "../usecase/AirportMarkService";
import uuid from "react-uuid";

const MapMarker = () => {
  const [airportMarks, setAirportMarks] = useState([]);
  const [airportLoc, setAirportLoc] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  const fetchAirportLoc = async () => {
    try {
      const res = await AirportMarkService.getListLocation();
      setAirportLoc(res);
    } catch (error) {
      console.log("Error fetching airport locations:", error);
    }
  };

  useEffect(() => {
    fetchAirportLoc();
  }, []);
  
  const filteredTest = airportMarks?.data?.filter((item) =>
    selectedLocation ? item.loc === selectedLocation : true
  );

  const fetchAirportMarks = async () => {
    try {
      const marks = await AirportMarkService.getListAirport();
      setAirportMarks(marks);
    } catch (error) {
      console.log("Error fetching airport marks:", error);
    }
  };

  useEffect(() => {
    fetchAirportMarks();
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">All Locations</option>
        {airportLoc?.map((item, index) => (
          <option key={index} value={item.loc}>
            {item.loc}
          </option>
        ))}
      </select>
      <MapContainer
        preferCanvas={true}
        center={[38.883, -9.03]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredTest?.map((mark) => (
          <Marker key={uuid()} position={[mark.lat, mark.long]}>
            <Popup>
              {mark.loc} <br /> Coordinates: {mark.lat}, {mark.long}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapMarker;
