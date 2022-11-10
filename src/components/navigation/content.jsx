import { Route, Routes } from "react-router-dom";
import Country from '../Countries/Country';
import Details from '../Details/Details';

const Content = ({mode}) => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Country mode={mode} />} />
                <Route path="/details/:name" element={<Details mode={mode} />} />
            </Routes>
        </>
    )
}

export default Content;