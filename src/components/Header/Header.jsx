import { useState } from 'react';
import './style.css';

const Header = () => {
    const [iconMoon, setIconMoon] = useState('fa-regular fa-moon');

    function changeTheme(){
        if(iconMoon === 'fa-regular fa-moon'){
            setIconMoon('fa-solid fa-moon');
        } else {
            setIconMoon('fa-regular fa-moon');
        } 
    }

    return(
        <header>
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