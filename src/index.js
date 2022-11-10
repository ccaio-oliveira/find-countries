import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootEl = document.querySelector('#root');

const root = ReactDOM.createRoot(rootEl);

function theme(mode){
    if(mode === 'dark'){
        rootEl.style.backgroundColor = 'hsl(207, 26%, 17%)';
    } else {
        rootEl.style.backgroundColor = '#fff';
    }
}

root.render(
    <App theme={theme} />
)