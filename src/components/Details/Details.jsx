import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${name}`).then(res => res.json()).then(result => {
            setCountry(result);
        })
    }, []);


    return (
        <div id='country'>
            {/* <p>{country[0].region}</p> */}
            <img src={`${country[0].flag}`} alt="" />
        </div>
    )
}

export default Details;