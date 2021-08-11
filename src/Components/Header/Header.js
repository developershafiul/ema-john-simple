import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <header>
            <div className="img">
                <img src={logo} alt="logo" />
            </div>
            <Navigation></Navigation>
        </header>
    );
};

export default Header;