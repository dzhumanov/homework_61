import { countryInfo } from "../../types";

interface Props {
    countryInfo: countryInfo | null;
}

const FullCountry:React.FC<Props> = ({countryInfo}) => {
    return(
        (countryInfo && (
            <div className="card col-6">
                <div className="card-body">
                    <h2>{countryInfo.name}</h2>
                    <p>Capital: {countryInfo.capital}</p>
                    <p>Population: {countryInfo.population}</p>
                    <div>Neighbours: 
                        <ul>
                            {countryInfo.neighbours.map((neighbour) => (
                                <li key={Math.random()}>{neighbour}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        )) || <div className="col-6">Choose a country.</div>
    )
}

export default FullCountry;