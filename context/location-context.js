"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const LocationContext = React.createContext();
const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  async function getGeoInfo() {
    console.log("API request succeeded");
    await axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        console.log(data, "data");
        setLocation(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getGeoInfo();
  }, []);

  useEffect(() => {
    console.log(location, "Updated location state");
  }, [location]);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
