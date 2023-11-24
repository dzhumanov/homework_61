import {useRef} from 'react'
import { country } from "../../types";

interface Props {
    countries: country[];
    onCountry: (alpha3Code:string) => void;
}

const CountryList:React.FC<Props> = ({countries, onCountry}) => {
    const countryContainerRef = useRef<HTMLDivElement>(null);
    const countrySelect = (alpha3Code:string) => {
        onCountry(alpha3Code);
    }
    return (
      <div
      className='border border-primary col-6'
        ref={countryContainerRef}
        style={{ maxHeight: "440px", overflowY: "auto" }}
      >
        <ul>
          {countries.map((country) => (
            <li key={Math.random()} onClick={() => countrySelect(country.alpha3Code)}>{country.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default CountryList;