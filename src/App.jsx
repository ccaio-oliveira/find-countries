import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import './style.css';
import Content from './components/Navigation/content';

const App = ({theme}) => {
    const [darkLight, setDarkLight] = useState('light');
    const changeMode = (setMode) => {
        setDarkLight(setMode);
    }

    theme(darkLight);

    return(
        <Router className={darkLight}>
            <Header changeMode={changeMode} />
            <Content mode={darkLight} />
        </Router>
    )
}

export default App;