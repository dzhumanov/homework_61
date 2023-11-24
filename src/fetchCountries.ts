import axios from "axios";
import { country } from "./types";

const url: string = "https://restcountries.com/v2/all?fields=alpha3Code,name";

const fetchCountries = async (
  setCountries: React.Dispatch<React.SetStateAction<country[]>>
) => {
  try {
    const response = await axios.get<country[]>(url);
    const countriesData = response.data.map((country) => ({
      name: country.name,
      code: country.code,
    }));
    setCountries(countriesData);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

export default fetchCountries;
