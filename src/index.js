import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Minihome from './Minihome';
import Home from './Home';
import Bottom from './Bottom'
import { BrowserView, MobileView } from 'react-responsive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <div className='maincontanre'>
    <Header/>
    <Minihome/>
    <Home/>
    <Bottom/>
    </div>
    </>
);



