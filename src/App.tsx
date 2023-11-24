import { useState, useCallback, useEffect } from "react";
import CountryList from "./Components/CountryList/CountryList";
import { country, countryInfo } from "./types";
import FullCountry from "./Components/FullCountry/FullCountry";
import fetchCountries from "./fetchCountries";
import getCountry from "./getCountry";

function App() {
  const [countries, setCountries] = useState<country[]>([]);
  const [country, setCountry] = useState<countryInfo | null>(null);

  useEffect(() => {
    void fetchCountries(setCountries);
  }, [fetchCountries]);

  const onCountry = (code: string) => {
    getCountry(code, setCountry);
  };
  return (
    <>
      <div className="row">
        <CountryList countries={countries || []} onCountry={onCountry} />
        {/* <FullCountry country={country} /> */}
      </div>
    </>
  );
}

export default App;
