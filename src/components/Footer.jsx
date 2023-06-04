import NavLogo from "../Images/Main-logo.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="Main-Footer">
                <div className="container-fluid py-4">
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
                        <div className="col-md-5">
                            <Link className="navbar-brand" to="/">
                                <img src={NavLogo} alt="Rebel Design Solution" width="240" />
                            </Link>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem eligendi quia, tempore excepturi facere pariatur aliquam velit nam aspernatur! Natus, adipisci perspiciatis? Amet cum eum enim, autem possimus debitis.
                            </p>
                            <h6 className="fw-bold">Trusted By:</h6>
                            <img src="https://webandseoexperts.com/Assets/images/Footer-trusted-img.png" alt="" />
                        </div>
                        <div className="col-md-2 lh-lg">
                            <h6 className="fw-bold mb-4">Quick Links</h6>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/pricing"></Link> Pricing</li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact-us">Contatc Us</Link></li>
                        </div>
                        <div className="col-md-2 lh-lg">
                            <h6 className="fw-bold mb-4">Services</h6>
                            <li><Link to="/seo-services">Search Engine Optimization</Link></li>
                            <li><Link to="/google-ads-management-services">Google Ads Management</Link></li>
                            <li><Link to="/social-media-services">Social Media Marketing</Link></li>
                            <li><Link to="/website-design-development-services">Website Design &amp; Development</Link></li>
                        </div>
                        <div className="col-md-3 lh-lg">
                            <h6 className="fw-bold mb-4">Contact Us</h6>
                            <li> <i className="fa-solid fa-location-dot"> &nbsp;</i> 17595 Harvard Ave Ste C-641
                                Irvine, CA 92614 United States</li>
                            <li><i className="fa-solid fa-envelope"></i> info@rebeldesignsolution.com</li>
                            <li><i className="fa-solid fa-phone"></i> 1-234-567-8911</li>
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