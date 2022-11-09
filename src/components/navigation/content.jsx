import { Route, Routes } from "react-router-dom";
import Country from '../Countries/Country';
import Details from '../Details/Details';

const Content = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Country />} />
                <Route path="/details/:name" element={<Details />} />
            </Routes>
        </>
    )
}

export default Content;