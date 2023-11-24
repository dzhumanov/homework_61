import {useRef} from 'react'
import { country } from "../../types";

interface Props {
    countries: country[];
    onCountry: (code:string) => void;
}

const CountryList:React.FC<Props> = ({countries, onCountry}) => {
    const countryContainerRef = useRef<HTMLDivElement>(null);
    return (
      <div
      className='border border-primary col-6'
        ref={countryContainerRef}
        style={{ maxHeight: "440px", overflowY: "auto" }}
      >
        <ul>
          {countries.map((country) => (
            <li key={Math.random()} onClick={() => onCountry(country.code)}>{country.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default CountryList;