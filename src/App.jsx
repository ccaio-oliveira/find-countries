import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import './style.css';
import Content from './components/Navigation/content';

const App = () => {
    return(
        <Router>
            <Header />
            <Content />
        </Router>
    )
}

export default App;