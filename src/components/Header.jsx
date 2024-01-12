import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import Headroom from "react-headroom";
import { IoIosArrowDown } from "react-icons/io";
import { PiSun } from "react-icons/pi";
import { RiMoonClearLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";



function Header() {

    // theme
    const [theme, setTheme] = useState(false);

    const ActiveMode = async () => {
        setTheme(!theme);
        if (theme === true) {
            document.body.classList.add("dark");
            localStorage.setItem("ChoosenTheme", "dark");
        }
        if (theme === false) {
            document.body.classList.remove("dark");
            localStorage.setItem("ChoosenTheme", "light");
        }
    };
    // checking local storage
    useEffect(() => {
        const SystemThemeUser = localStorage.getItem("ChoosenTheme");
        if (SystemThemeUser && SystemThemeUser === "light") {
            document.querySelector("body").classList.remove("dark");
            setTheme(!theme);
        }
        // dark
        else if (SystemThemeUser && SystemThemeUser === "dark") {
            document.querySelector("body").classList.add("dark");
            // setTheme(true);
        }
    }, []);


    let darkmode = theme ? '' : 'dark';

    const [scrollClassName, setScrollClassName] = useState('hide');

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            if (y >= 300) {
                setScrollClassName('show');
            } else {
                setScrollClassName('hide');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        

            {/* <Headroom > */}
            <header>
                <div className="header-left">
                    <Link to="/" className="logo">
                        <h1>Qik</h1>
                    </Link>

                    <div className="mega-menu">
                        <ul>
                            <li>
                                <p>Elements</p>
                                <IoIosArrowDown className="dropdown-icon" />
                                <div className="dropdown">
                                    <Link to="/" className="link">Accordions</Link>
                                    <Link to="/" className="link">Buttons</Link>
                                    <Link to="/" className="link">Cards</Link>
                                    <Link to="/" className="link">Checkboxes</Link>
                                    <Link to="/" className="link">Footers</Link>
                                    <Link to="/" className="link">Forms</Link>
                                    <Link to="/" className="link">Loaders</Link>
                                    <Link to="/" className="link">Menu</Link>
                                    <Link to="/" className="link">Media Players</Link>
                                    <Link to="/" className="link">Navigation Bars</Link>
                                    <Link to="/" className="link">Radio Buttons</Link>
                                    <Link to="/" className="link">Shadows</Link>
                                    <Link to="/" className="link">Tables</Link>
                                    <Link to="/" className="link">Tooltips</Link>
                                      
                                </div>
                            </li>
                            
                            <li>
                                <p>Portfolio Templates</p>
                            </li>
                            
                            <li>
                                <p>Colors palettes</p>
                                {/* <sup>NEW</sup> */}
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="right-icons">
                    <div className={`ri-btn ${darkmode}`} onClick={ActiveMode}>{theme ? <PiSun /> : <RiMoonClearLine />}</div>
                    <div className="creators">Creators</div>
                </div>

            </header>
            {/* </Headroom> */}

            <ScrollToTop smooth width="15" className="scrollToTop" />
        </>

    )
}

export default Header