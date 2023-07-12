// import phone from "../Images/contact-number.png"
import { Link } from "react-router-dom"
import email from "../Images/email-address.png"
// import address from "../Images/office-address.png"

const ContactUs = () => {
    return (
        <>
            <div className="contect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className='text-center pt-5 mt-5'>
                                <h1 className='fw-bold'
                                >Get in<span style={{ color: '#222222' }}>  Touch </span>
                                </h1>
                                <p>We are open to your queries and suggestions. Let us know your viewpoint via filling out the form below.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                <div className="shape-divider"></div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <div>
                            {/* <div className="row bg-dark text-white rounded p-2 m-2">
                                <div className="col-md-3">
                                    <img src={phone} alt="REBEL" />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <a href="tel:" className="fw-bold">+123-456-789-0</a>
                                </div>
                            </div> */}
                            <div className="row bg-dark text-white rounded p-2 m-2">
                                <div className="col-md-3">
                                    <img src={email} alt="REBEL" />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <Link to="mailto:info@rebeldesignsolution.com" className="fw-bold">
                                        info@rebeldesignsolution.com
                                    </Link>
                                </div>
                            </div>
                            <div className="row bg-dark text-white rounded p-2 m-2">
                                <div className="col-md-3">
                                    <img src={email} alt="REBEL" />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <Link to="mailto:marketing@rebeldesignsolution.com" className="fw-bold">
                                        marketing@rebeldesignsolution.com
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="row bg-dark text-white rounded p-2 m-2">
                                <div className="col-md-3">
                                    <img src={address} alt="REBEL" />
                                </div>
                                <div className="col-md-9 d-flex align-items-center">
                                    <a href="tel:" className="fw-bold">  17595 Harvard Ave Ste C-641 Irvine, CA 92614 United States
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="your-name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="your-name" placeholder="John Doe" required />
                            </div>
                            <div className="col-md-6">
                                <label for="your-email" className="form-label">Your Email</label>
                                <input type="email" className="form-control" id="your-email" placeholder="john45@example.com" required />
                            </div>
                            <div className="col-6">
                                <label for="phone-number" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="phone-number" placeholder="+123 4567 890" required />
                            </div>
                            <div className="col-6">
                                <label for="website-url" className="form-label">Website URL</label>
                                <input type="text" className="form-control" id="website-url" placeholder="www.example.com" />
                            </div>
                            <div className="col-md-12">
                                <label for="services" className="form-label">Services</label>
                                <select id="services" className="form-select" required>
                                    <option disabled selected>PLEASE SELECT A SERVICES</option>
                                    <option>Graphics Design</option>
                                    <option>Website Design & Development</option>
                                    <option>App Development</option>
                                    <option>Search Engine Optimization (SEO)</option>
                                    <option>Google Ads Management</option>
                                    <option>Social Media Marketing</option>
                                    <option>Content Marketing</option>
                                    <option>Website Content</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btns-three">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.2105528231004!2d-117.83548742514559!3d33.677611837420564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde8046659473%3A0xc86ccc706ff94d64!2s17595%20Harvard%20Ave%20ste%20c%20641%2C%20Irvine%2C%20CA%2092614%2C%20USA!5e0!3m2!1sen!2s!4v1685886117438!5m2!1sen!2s"
                            loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs