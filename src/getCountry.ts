import axios from "axios";
import { countryInfo } from "./types";

const getCountry = async (
  code: string,
  setSelectedCountry: React.Dispatch<React.SetStateAction<countryInfo | null>>
) => {
  try {
    const response = await axios.get<countryInfo>(
      `https://restcountries.com/v2/alpha/${code}`
    );

    const info = response.data;
    const neighboursInfo = await Promise.all(
      info.borders?.map(async (border) => {
        const borders = await axios.get<countryInfo>(
          `https://restcountries.com/v2/alpha/${border}`
        );
        return borders.data.name;
      }) || ["No neighbours."]
    );

    const countryInfoList = {
      name: info.name,
      capital: info.capital,
      population: info.population,
      borders: neighboursInfo,
      flag: info.flag,
    };

    setSelectedCountry(countryInfoList);
  } catch (error) {
    console.error("Error fetching country:", error);
  }
};

export default getCountry;
