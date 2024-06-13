import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Service() {
    const [active, setActive] = useState(false);

    function show() {
        setActive(!active);
    }
    return (
        <div>
            <header id="music-header">
                <nav className="container music-nav">
                    <div className="logo">
                        myTunes
                    </div>
                    <ul className={`links ${active ? 'active' : ''}`}>
                        <li><Link to="#">Overview</Link></li>
                        <li><Link to="#">Music</Link></li>
                        <li><Link to="#">Video</Link></li>
                        <li><Link to="#">Gift Cards</Link></li>
                    </ul>
                    <div className="hamburger-menu">
                        <button onClick={show}><MenuIcon style={{fontSize: '40px'}}/></button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Service;
