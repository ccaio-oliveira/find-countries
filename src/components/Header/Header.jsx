import { useState } from 'react';
import './style.css';

const Header = ({changeMode}) => {
    const [iconMoon, setIconMoon] = useState('fa-regular fa-moon');
    const [headerClass, setHeaderClass] = useState('lightMode');

    function changeTheme(){
        if(iconMoon === 'fa-regular fa-moon'){
            setIconMoon('fa-solid fa-moon');
            changeMode('dark');
            setHeaderClass('darkMode');
        } else {
            setIconMoon('fa-regular fa-moon');
            setHeaderClass('lightMode');
            changeMode('light');
        } 
    }

    return(
        <header className={headerClass}>
            <div className="container">
                <h1>Where in the world?</h1>
                <div className="mode" onClick={changeTheme}>
                    <i className={iconMoon}></i>
                    <p>Dark Mode</p>
                </div>
            </div>
        </header>
    )
}

export default Header;