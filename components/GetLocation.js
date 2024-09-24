import axios from "axios";

export const GetLocation = async () => {
  try {
    const location = await axios.get("https://ipapi.co/country/");
    const country = location.data;
    return country;
  } catch (error) {
    console.error("Error fetching location", error);
    return null;
  }
};
