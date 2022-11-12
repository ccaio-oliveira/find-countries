import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css';

const Details = ({ mode }) => {
    const [country, setCountry] = useState([]);
    const [borderCountry, setBorderCountry] = useState([]);
    const { name } = useParams();
    const language = [];
    const currencies = [];

    useEffect(() => {
        const countries = async (name) => {
            const url = `https://restcountries.com/v2/name/${name}`;
            const response = await fetch(url);
            const data = await response.json();
            setCountry(data[0]);
            data[0]?.borders?.forEach((border) => {
                return findBorderCountries(border);
            })
        };
        countries(name);

        const findBorderCountries = async (border) => {
            const url = `https://restcountries.com/v2/alpha/${border}`;
            const response = await fetch(url);
            const data = await response.json();
            setBorderCountry((cur) => [...cur, data.name]);
        }
    }, [name]);

    for (let i in country.languages) {
        language.push(country.languages[i].name);
    }

    for (let i in country.currencies) {
        currencies.push(country.currencies[i].name);
    }

    return (
        <div id='details'>
            <div className="container">
                <div id={`goBack-${mode}`}>
                    <Link to="/"><i className="fa-solid fa-left-long"></i> Back</Link>
                </div>
                <div id='country'>
                    <div id="img">
                        <img src={`${country.flag}`} alt={`flag of ${country.name}`} />
                    </div>
                    <div className={`information-${mode}`}>
                        <h2>{country.name}</h2>
                        <div className="allInfo">
                            <div id="left">
                                <p>Native Name: <span>{country.nativeName}</span></p>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Sub Region: <span>{country.subregion}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </div>
                            <div id="right">
                                <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                                <p>Currencies: <span>{currencies.join(', ')}</span></p>
                                <p>Languages: <span>{language.join(', ')}</span></p>
                            </div>
                        </div>
                        <div id="border">
                            <p>Border Countries: <span>{borderCountry.join(', ')}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;