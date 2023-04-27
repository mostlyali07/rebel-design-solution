

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
                            <a href="/contact-us" className="btns-ten">Contant Us <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <hr style={"color: #fff;"} /> */}
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <a className="navbar-brand" href="/">
                                <img src="./Assets/images/main-logo.png" alt="Web and SEO Experts" width="240" />
                            </a>
                            <p className="mt-4">
                                Web and SEO Experts is your one-stop-shop for all things digital marketing. From optimizing your online presence to driving traffic to your website, we offer a range of services that can help your business succeed. Let our team of experts guide you through the digital landscape and achieve your business goals.
                            </p>
                            <h6 className="fw-bold">Trusted By:</h6>
                            <img src="./Assets/images/Footer-trusted-img.png" alt="" />
                        </div>
                        <div className="col-md-2 lh-lg">
                            <h6 className="fw-bold mb-4">Quick Links</h6>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/pricing"></a> Pricing</li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact-us">Contatc Us</a></li>
                        </div>
                        <div className="col-md-2 lh-lg">
                            <h6 className="fw-bold mb-4">Services</h6>
                            <li><a href="/seo-services">Search Engine Optimization</a></li>
                            <li><a href="/google-ads-management-services">Google Ads Management</a></li>
                            <li><a href="/social-media-services">Social Media Marketing</a></li>
                            <li><a href="/website-design-development-services">Website Design &amp; Development</a></li>
                        </div>
                        <div className="col-md-3 lh-lg">
                            <h6 className="fw-bold mb-4">Contact Us</h6>
                            <li> <i className="fa-solid fa-location-dot"> &nbsp;</i> 17595 Harvard Ave Ste C-641
                                Irvine, CA 92614 United States</li>
                            <li><i className="fa-solid fa-envelope"></i> info@webandseoexperts.com</li>
                            <li><i className="fa-solid fa-phone"></i> 1-844-716-8111</li>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center mt-5">
                            <h6 className="lh-lg">Copyright © 2023 webandseoexperts.com | All rights reserved
                                <a href="/terms-and-conditions"> Terms And Conditions</a>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer