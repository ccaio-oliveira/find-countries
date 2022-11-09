import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './country.css';

const Country = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all").then(res => res.json()).then(result => {
            setCountry(result);
        })
    }, []);

    return (
        <div id="wrapper">
            <div className="container">
                {country.map((count) => (
                    <Link to={`/details/${count.name}`} className='countryContent' key={count.alpha3Code}>
                        <img src={count.flag} alt={count.name} />
                        <div className="data">
                            <h2>{count.name}</h2>
                            <div className="other">
                                <p>Population: <span>{count.population}</span></p>
                                <p>Region: <span>{count.region}</span></p>
                                <p>Capital: <span>{count.capital}</span></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Country;