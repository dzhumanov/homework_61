import { useState, useCallback, useEffect } from "react";
import CountryList from "./Components/CountryList/CountryList";
import { country, countryInfo } from "./types";
import FullCountry from "./Components/FullCountry/FullCountry";
import fetchCountries from "./fetchCountries";
import getCountry from "./getCountry";

function App() {
  const [countries, setCountries] = useState<country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<countryInfo | null>(null);

  useEffect(() => {
    void fetchCountries(setCountries);
  }, [fetchCountries]);

  const onCountry = (code: string) => {
    getCountry(code, setSelectedCountry);
  };
  return (
    <>
      <div className="row">
        <CountryList countries={countries || []} onCountry={onCountry} />
        <FullCountry countryInfo={selectedCountry} />
      </div>
    </>
  );
}

export default App;
