import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './country.css';

const Country = () => {
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('');
    const [filterRegion, setFilterRegion] = useState('Filter by Region');

    useEffect(() => {
        fetch("https://restcountries.com/v2/all").then(res => res.json()).then(result => {
            setCountry(result);
        })
    }, []);

    const changeRegion = (e) => {
        const reg = e.target.value;
        if (reg === 'Filter by Region') {
            setFilterRegion('Filter by Region');
        } else {
            setFilterRegion(reg);
        }
    }

    const countryFilter = country.filter((country) => country.name.toLowerCase().includes(search));

    return (
        <div id="wrapper">
            <div id="searchFilter">
                <div className="container">
                    <div id="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" className='inputSearch' placeholder='Search for a country...' onChange={e => setSearch(e.target.value)} />
                    </div>
                    <div id="filter">
                        <select name="filter" id="filterRegion" onChange={e => changeRegion(e)}>
                            <option value="Filter by Region" defaultValue>Filter by Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="countries">
                <div className="container">
                    {countryFilter.map((count) => {
                        if (filterRegion === 'Filter by Region') {
                            return (
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
                            )
                        } else if (filterRegion === count.region) {
                            return (
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
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Country;