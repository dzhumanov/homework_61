import React from "react";
import { countryInfo } from "../../types";

interface Props {
  countryInfo: countryInfo | null;
}

const FullCountry: React.FC<Props> = React.memo(({ countryInfo }) => {
  return (
    (countryInfo && (
      <div className="card col-6">
        <div className="card-body">
          <div className="card-head d-flex">
              <h2 className="d-inline-block">{countryInfo.name}</h2>
              <span className="d-inline-block w-25"><img className="w-50 ms-3" src={countryInfo.flag} alt="" /></span>
          </div>
          <p><span className="fw-bold">Capital:</span> {countryInfo.capital}.</p>
          <p><span className="fw-bold">Population:</span> {countryInfo.population}.</p>
          <div>
            <span className="fw-bold">Neighbours:</span>
            <ul>
              {countryInfo.borders.map((neighbour) => (
                <li key={Math.random()}>{neighbour}.</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )) || <div className="col-6 fs-2 fw-bold text-center">Choose a country from list</div>
  );
});

export default FullCountry;
