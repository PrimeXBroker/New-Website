import axios from "axios";

export const GetLocation = async () => {
  try {
    const location = await axios.get(
      "https://ipapi.co/json/?key=K77WYqZkYB204PVwWhbSidveUzBLTtcnvTgiE0rGtd0ww9jH6E"
    );
    const country = location.data.country;
    return country;
  } catch (error) {
    console.error("Error fetching location", error);
    return null;
  }
};
