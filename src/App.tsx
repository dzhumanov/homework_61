import { useState, useEffect } from "react";
import CountryList from "./Components/CountryList/CountryList";
import { country, countryInfo } from "./types";
import FullCountry from "./Components/FullCountry/FullCountry";
import fetchCountries from "./fetchCountries";
import getCountry from "./getCountry";
import Preloader from "./Components/Preloader/Preloader";
import "./index.css";

function App() {
  const [countries, setCountries] = useState<country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<countryInfo | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchCountries(setCountries);
      setIsLoading(false);
    };

    void fetchData();
  }, []);

  const onCountry = async (code: string) => {
    setIsLoading(true);
    await getCountry(code, setSelectedCountry);
    setIsLoading(false);
  };

  return (
    <>
      <div className="container w-75">
        <div className="row">
          <CountryList countries={countries || []} onCountry={onCountry} />
          {isLoading ? (
            <Preloader />
          ) : (
            <FullCountry countryInfo={selectedCountry} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
