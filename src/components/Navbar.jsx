import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from "../Images/Main-logo.jpg";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header id="header" style={{ transform: `translateY(${scrollPosition > 80 ? '-100%' : '0'})` }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={NavLogo} alt="Rebel Design Solutions" className="nav-logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarSupportedContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All Services
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/app-development-services">App Development</Link></li>
                                        <li><Link className="dropdown-item" to="/seo-services">Search Engine Optimization</Link></li>
                                        <li><Link className="dropdown-item" to="/google-ads-management-services">Google Ads Management</Link></li>
                                        <li><Link className="dropdown-item" to="/social-media-services">Social Media marketing</Link></li>
                                        <li><Link className="dropdown-item" to="/website-design-development-services">Website Design &amp; Development</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/testimonials">Testimonials</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btns-one" type="submit">Analyze My Site</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
export default Navbar;
