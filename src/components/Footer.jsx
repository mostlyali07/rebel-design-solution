import NavLogo from "../Images/Main-logo.jpg";
import Trustee from "../Images/Footer-trusted-img.png";
// import Facebook from "../Images/facebook.png";
// import Instagram from "../Images/instagram.png";
// import Pinterest from "../Images/pinterest.png";
// import Twitter from "../Images/twitter.png";
// import Linkedin from "../Images/linkedin.png";
// import xTwitter from "../Images/x-twitter.svg"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook, BsInstagram, BsLinkedin, BsPinterest } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="Main-Footer">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center my-5">
                            <div>
                                <h2 className="fw-bold">Interested in Collaboration?</h2>
                                <h6 className="lh-lg">Challenge us. We want to work with you to create <br />
                                    the realty cool stuff.</h6>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center">
                            <Link to="/contact-us" className="btns-ten">Contant Us <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <hr
                        style={{
                            background: "#fff",
                            height: "2px",
                            border: "none",
                        }}
                    />
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <Link className="navbar-brand" to="/">
                                <img src={NavLogo} alt="Rebel Design Solution" width="240" />
                            </Link>
                            <p className="mt-4">
                                We are a team of digital marketers, creative web developers, SEO experts, social media marketers, passionate researchers, and enthusiastic nerds who constantly strive to stay ahead of the curve in the Digital industry.
                            </p>
                            <h6 className="fw-bold">Trusted By:</h6>
                            <img src={Trustee} alt="Rebel Design Solution" />
                        </div>
                        <div className="col-md-2 lh-lg">
                            <h6 className="fw-bold mb-4">Quick Links</h6>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/pricing"></Link> Pricing</li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </div>
                        <div className="col-md-2 lh-lg">
                            <h6 className="fw-bold mb-4">Services</h6>
                            <li><Link to="/seo-services">Search Engine Optimization</Link></li>
                            <li><Link to="/google-ads-management-services">Google Ads Management</Link></li>
                            <li><Link to="/social-media-services">Social Media Marketing</Link></li>
                            <li><Link to="/website-design-development-services">Website Design &amp; Development</Link></li>
                        </div>
                        <div className="col-md-4 lh-lg">
                            <h6 className="fw-bold mb-4">Contact Us</h6>
                            <Link to="mailto:info@rebeldesignsolution.com"><FontAwesomeIcon icon={faEnvelope} /> info@rebeldesignsolution.com</Link>
                            <br />
                            <Link to="mailto:marketing@rebeldesignsolution.com"><FontAwesomeIcon icon={faEnvelope} /> marketing@rebeldesignsolution.com</Link>
                            <br />
                            <br />
                            <ul className="social3d">
                                <li><Link to="https://www.facebook.com/rebeldesignsolution" target="_blank"><BsFacebook /></Link></li>
                                <li><Link to="https://twitter.com/rebeldesignsol" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></Link></li>
                                <li><Link to="https://pin.it/3PINrZB" target="_blank"><BsPinterest /></Link></li>
                                <li><Link to="https://www.linkedin.com/company/rebeldesignsolution" target="_blank"><BsLinkedin /></Link></li>
                                <li><Link to="https://instagram.com/rebeldesignsolution" target="_blank"><BsInstagram /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center mt-5">
                            <h6 className="lh-lg">Copyright © 2023 rebeldesignsolution.com | All rights reserved |
                                <Link to="/terms-and-conditions"> Terms And Conditions</Link> |
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer