import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import './index.css';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Nav />
        </div>
    )
}

export default Header
