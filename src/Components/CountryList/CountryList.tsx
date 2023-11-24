import React from "react";
import {useRef } from "react";
import { country } from "../../types";

interface Props {
  countries: country[];
  onCountry: (alpha3Code: string) => void;
}

const CountryList: React.FC<Props> = React.memo(({ countries, onCountry }) => {
  const countryContainerRef = useRef<HTMLDivElement>(null);
  const countrySelect = (alpha3Code: string) => {
    onCountry(alpha3Code);
  };

  return (
    <div
      className="col-6 vh-100"
      ref={countryContainerRef}
      style={{ overflowY: "auto" }}
    >
      <ul>
        {countries.map((country) => (
          <li
            className="list-item fs-2"
            key={Math.random()}
            onClick={() => countrySelect(country.alpha3Code)}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CountryList;
