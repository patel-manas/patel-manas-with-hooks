import React, { useState } from 'react'
import { scrollTo } from '../../utils/scrollTo';
import Slide from 'react-reveal/Slide';
import Resume from "../../assets/ManasPatel_acg.pdf";

const Nav = () => {
    const [mobileNav, setmobileNav] = useState(false);
    const [close, setClose] = useState(false);
    const animatedLi = (text) => {
        return (
            <li key={text} onClick={text === "Resume" ? (() => {
                var win = window.open(Resume, '_blank');
                win.focus();
            }) : (() => scrollTo(text.toLowerCase()))}>
                {text}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </li>
        )
    }
    const menuOptions = ['Home', 'About', 'Skills', 'Resume', 'Work', 'Contact'];
    const mobileNavTemplate = (
        <section className="mobile-nav">
            {menuOptions.map(menu => <div className="menu-item" key={`item-${menu}`} onClick={menu === "Resume" ? (() => {
                var win = window.open(Resume, '_blank');
                win.focus();
            }) : (() => {
                handleClose()
                scrollTo(menu.toLowerCase())
            })}>{menu}</div>)}
        </section>
    );
    const handleMenu = () => {
        setmobileNav(true);
        setClose(true);
    };
    const handleClose = () => {
        setClose(false);
        setmobileNav(false);
    }
    return (
        <nav className="nav">
            <Slide top>
                <ul>
                    {menuOptions.map(menu => animatedLi(menu))}
                </ul>
            </Slide>
            <span className="icon" onClick={handleMenu}><i className="fa fa-bars" aria-hidden="true"></i></span>
            {close ? <span className="close" onClick={handleClose}><i className="fa fa-times" aria-hidden="true"></i></span> : null}
            {mobileNav ? mobileNavTemplate : null}
        </nav>
    )
}

export default Nav
