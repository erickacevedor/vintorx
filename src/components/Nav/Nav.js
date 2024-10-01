import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../constants.json';

const useToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle('toggle-menu', isMenuOpen);

        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.nav__menu') && !event.target.closest('.navbar-toggler')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);
    return () => setIsMenuOpen(!isMenuOpen);
};

const useScrollEffect = () => {
    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 0;
            document.body.classList.toggle('scrolling', isScrolling);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

const Nav = () => {
    const toggleMenu = useToggleMenu();
    useScrollEffect();

    const handleAboutClick = (event) => {
        event.preventDefault()
        document.body.classList.add('highlight');

        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
            document.body.classList.remove('highlight');
        }, 300);
    };

    return (
        <nav className="nav">
            <div className="nav__container container">
                <div className="logo">
                    <Link aria-label="VPixel CO" className='nostatic' style={{ backgroundImage: `url(../../images/logo-vpx-white.svg)` }} to="/" />
                </div>


                <div className="nav__actions">
                    <button aria-label="Nav Button" className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span style={{ backgroundImage: `url(../../images/toggle-button.svg)` }} className="navbar-toggler-icon"></span>
                    </button>

                    <Link target='_blank' aria-label="Get Started" rel='noopener noreferrer' to={constants.site.contactLink} className="button">Get Started</Link>
                </div>

                <div className="nav__menu">
                    <div className="nav__menu-container">
                        <div id="NavDropdownMenu" className="menu-main-menu-container">
                            <ul id="menu-main-menu">
                                <li className="menu-title">Menu</li>
                                <li>
                                    <Link
                                        to="#about"
                                        title="About VPixel CO"
                                        onClick={handleAboutClick}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleAboutClick(e);
                                        }}
                                    >
                                        About VPixel CO
                                    </Link>
                                </li>
                                {[
                                    { to: "#services", title: "Our Services" },
                                    { to: "#portfolio", title: "Portfolio & Clients" },
                                    { to: "#contact", title: "Contact Us" }
                                ].map(({ to, title }) => (
                                    <li key={to}><Link to={to} title={title}>{title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Nav;