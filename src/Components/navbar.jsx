import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isOthersDropdownOpen, setIsOthersDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsOthersDropdownOpen(false);
    };

    const handleNavClick = (e, href) => {
        // handle anchor hash links: scroll if on home, otherwise navigate home then scroll
        if (href && href.startsWith('#')) {
            e.preventDefault();
            if (location.pathname === '/') {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
            } else {
                navigate('/');
                // wait a tick for route change/render then scroll
                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                closeMenu();
            }
            return;
        }

        closeMenu();
    };

    const handleCoursesClick = (e) => {
        handleNavClick(e, '#courses');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="/img/MMTI logo.jpg" alt="MMTI Logo" className="logo-img" />
                
                    <span className="logo-text">Mumbai Maritime Training Institute</span>
                    
                    
                </div>

                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#courses" className="nav-link" onClick={(e) => handleCoursesClick(e,'#courses')}>Courses </a>
                        
                    </li>
            
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-link" onClick={closeMenu}>Photo Gallery</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#others" className="nav-link" onClick={(e) => { e.preventDefault(); setIsOthersDropdownOpen(!isOthersDropdownOpen); }}>
                            Others
                        </a>
                        <ul className={`dropdown-menu ${isOthersDropdownOpen ? 'active' : ''}`}>
                            <li>
                                <Link to="/news" className="dropdown-link" onClick={() => { closeMenu(); setIsOthersDropdownOpen(false); }}>
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link to="/alumini" className="dropdown-link" onClick={() => { closeMenu(); setIsOthersDropdownOpen(false); }}>
                                    Alumini
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); setIsAboutDropdownOpen(!isAboutDropdownOpen); }}>About</a>
                        <ul className={`dropdown-menu ${isAboutDropdownOpen ? 'active' : ''}`}>
                            <li><a href="#about" className="dropdown-link" onClick={(e) => { handleNavClick(e, '#about'); setIsAboutDropdownOpen(false); }}>About Us</a></li>
                            <li><Link to="/faculty" className="dropdown-link" onClick={() => { closeMenu(); setIsAboutDropdownOpen(false); }}>Our Team </Link></li>
                            <li><Link to="/library" className="dropdown-link golden-glitter" onClick={() => { closeMenu(); setIsAboutDropdownOpen(false); }}>Library</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-cta" onClick={(e) => handleCoursesClick(e,'#courses')}>Book Now</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}