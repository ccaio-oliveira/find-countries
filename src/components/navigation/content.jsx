import { Routes, Route } from "react-router-dom";
import Country from "../Countries/Country";
import Details from "../Details/Details";

const Content = () => {
    return (
        <Routes>
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<Country />} />
        </Routes>
    )
}

export default Content;