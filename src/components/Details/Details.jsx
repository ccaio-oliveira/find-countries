import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const [country, setCountry] = useState([]);
    const [borderCountry, setBorderCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const Countries = async (name) => {
            const url = `https://restcountries.com/v2/name/${name}`;
            const response = await fetch(url);
            const data = await response.json();
            setCountry(data[0]);
            data[0]?.borders?.forEach((border) => {
                return findBorderCountries(border);
            })
        };
        Countries(name);

        const findBorderCountries = async (border) => {
            const url = `https://restcountries.com/v2/alpha/${border}`;
            const response = await fetch(url);
            const data = await response.json();
            setBorderCountry((cur) => [...cur, data.name]);
        }
    }, [name]);

    return (
        <>
            <div id="goBack">
                <Link to="/"><span>&larr;</span> Back</Link>
            </div>
            <div id='country'>
                {/* <p>{country[0].region}</p> */}
                <img src={`${country.flag}`} alt="" />
                <h1>{country.borderCountries}</h1>
            </div>
        </>
    )
}

export default Details;