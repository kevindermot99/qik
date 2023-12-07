import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import Headroom from "react-headroom";
import logo from "../images/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { PiSun } from "react-icons/pi";
import { RiMoonClearLine } from "react-icons/ri";


function Header() {

    // theme
    const [theme, setTheme] = useState(false);
    const [nav, setnav] = useState(false);

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

    function showNav() {
        setTimeout(() => {
            setnav(nav => !nav);
        }, 30);
    }

    function hideNav() {
        setTimeout(() => {
            setnav(false);
        }, 30);
    }

    let darkmode = theme ? '' : 'dark';
    let navActive = nav ? 'active' : '';
    useEffect(() => {
        document.body.id = nav ? 'with-navbar' : '';
    }, [nav]);


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

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs once on mount

    // making nav bar links keep hoverd when drop down shows
    const parentItems = document.querySelectorAll('.mega-menu ul li');
    parentItems.forEach(parentItem => {
        parentItem.addEventListener('mouseover', function () {
            this.classList.add('hovered');
        });

        parentItem.addEventListener('mouseout', function () {
            this.classList.remove('hovered');
        });
    });

    return (
        <>
            <div className={`menu ${navActive}`}>
                <div className="menu-container">
                    <div className="menu-logo">
                        <h1>Toolbox</h1>
                        <i class="bi bi-x-lg" onClick={hideNav}></i>
                    </div>
                    <p>Introduction</p>
                    <span><i class="bi bi-hash"></i>Usage</span>

                    <p><i class="bi bi-archive"></i>Navigation</p>
                    <span><i className="bi bi-hash"></i>Breadcrumbs</span>
                    <span><i class="bi bi-hash"></i>Menu</span>
                    <span><i class="bi bi-hash"></i>Mega-menu</span>
                    <span><i class="bi bi-hash"></i>Sidebar Menu</span>

                    <p><i class="bi bi-archive"></i>UI/UX</p>
                    <span><i className="bi bi-hash"></i>Button</span>
                    <span><i className="bi bi-hash"></i>Card</span>
                    <span><i className="bi bi-hash"></i>checkbox</span>
                    <span><i className="bi bi-hash"></i>Colors</span>
                    <span><i className="bi bi-hash"></i>Footers</span>
                    <span><i className="bi bi-hash"></i>Gallery</span>
                    <span><i className="bi bi-hash"></i>input</span>
                    <span><i className="bi bi-hash"></i>Loading Spinners</span>
                    <span><i className="bi bi-hash"></i>radio</span>
                    <span><i className="bi bi-hash"></i>Scrollbar</span>
                    <span><i className="bi bi-hash"></i>Shadows</span>
                    <span><i className="bi bi-hash"></i>Tables</span>
                    <span><i className="bi bi-hash"></i>Tooltips</span>


                    <p><i class="bi bi-archive"></i>Forms</p>
                    <span><i class="bi bi-hash"></i>Login</span>
                    <span><i class="bi bi-hash"></i>Sign up</span>
                    <span><i class="bi bi-hash"></i>Contact Form</span>
                    <span><i class="bi bi-hash"></i>Feedback Form</span>
                    <span><i class="bi bi-hash"></i>Survey Form</span>
                    <span><i class="bi bi-hash"></i>File Upload Form</span>
                    <span><i class="bi bi-hash"></i>Profile Update Form</span>






                </div>
            </div>
            <div className={`nav-overlay ${navActive}`} onClick={hideNav}></div>
            <div id="nav-middle-toggle" className={scrollClassName + navActive}>
                {nav ? <i class="bi bi-chevron-compact-left" onClick={hideNav}></i> : <i class="bi bi-chevron-compact-right" onClick={showNav}></i>}

            </div>
            {/* <Headroom > */}
            <header>
                <div className="header-left">
                    <button onClick={showNav}><CgMenuLeft className="react-icon" /></button>
                    <Link to="/" className="logo">
                        <img src={logo} />
                        <h1>QiK</h1>
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
                                    <Link to="/" className="link">Loading Spinners</Link>
                                    <Link to="/" className="link">Menu</Link>
                                    <Link to="/" className="link">Navigation Bars</Link>
                                    <Link to="/" className="link">Radio Buttons</Link>
                                    <Link to="/" className="link">Shadows</Link>
                                    <Link to="/" className="link">Tables</Link>
                                    <Link to="/" className="link">Tooltips</Link>
                                      
                                </div>
                            </li>
                            <li>
                                <p>Media</p>
                                <IoIosArrowDown className="dropdown-icon" />
                                <div className="dropdown">
                                    <Link to="/" className="link">Audio Players</Link>
                                    <Link to="/" className="link">Image Galleries</Link>
                                    <Link to="/" className="link">Video Players</Link>
                                </div>
                            </li>
                            <li>
                                <p>Templates</p>
                                <IoIosArrowDown className="dropdown-icon" />
                                <div className="dropdown">
                                    <Link to="/" className="link">Mobile App website</Link>
                                    <Link to="/" className="link">Brand Website</Link>
                                    <Link to="/" className="link">Admin Dashboard</Link>
                                    <Link to="/" className="link">E-commerce Website</Link>
                                    <Link to="/" className="link">Portfolio Website</Link>
                                    <Link to="/" className="link">Real Estate Website</Link>
                                    <Link to="/" className="link">Restaurant Website</Link>
                                </div>
                            </li>
                            <li>
                                <p>Forms</p>
                                <IoIosArrowDown className="dropdown-icon" />
                                <div className="dropdown">
                                    <Link to="/" className="link">Login & Sign up Forms</Link>
                                    <Link to="/" className="link">Contact Forms</Link>
                                    <Link to="/" className="link">Feedback Forms</Link>
                                    <Link to="/" className="link">Survey Forms</Link>
                                </div>
                            </li>
                            <li className="with-sup">
                                <p>Colors palettes</p>
                                <sup>beta</sup>
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

        </>

    )
}

export default Header