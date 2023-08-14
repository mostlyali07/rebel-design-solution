import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"
import email from "../Images/email-address.png"
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';


const Contactus = () => {
    return (
        <Helmet>
            <title>Contact Rebel Design Solution | Get in Touch Today!</title>
            <meta name="description" content="Contact Rebel Design Solution to discuss your design and digital needs. Reach out now for creative solutions and captivating brand transformations." />
            <meta name="keywords" content="Digital Marketing, Rebel Design Solution, SEO Marketing" />

            <link rel="canonical" href="https://rebeldesignsolution.com/contact-us" />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/contact-us"
                hreflang="en-us"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/contact-us"
                hreflang="en-ca"
            />
            <link
                rel="alternate"
                href="https://rebeldesignsolution.com/contact-us"
                hreflang="en-gb"
            />
            <link
                rel="alternate"
                hreflang="x-default"
                href="https://rebeldesignsolution.com/contact-us"
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Contact Rebel Design Solution | Get in Touch Today!"
            />
            <meta
                property="og:description"
                content="Contact Rebel Design Solution to discuss your design and digital needs. Reach out now for creative solutions and captivating brand transformations."
            />
            <meta property="og:url" content="https://rebeldesignsolution.com/contact-us" />
            <meta
                property="og:image"
                content="https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
            <meta property="og:image:width" content="880" />
            <meta property="og:image:height" content="660" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="REBEL DESIGN SOLUTION" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://rebeldesignsolution.com/contact-us" />
            <meta name="twitter:creator" content="@rebeldesignsolution" />
            <meta
                name="twitter:title"
                content="Contact Rebel Design Solution | Get in Touch Today!"
            />
            <meta
                name="twitter:description"
                content="Contact Rebel Design Solution to discuss your design and digital needs. Reach out now for creative solutions and captivating brand transformations."
            />
            <meta
                name="twitter:image"
                content=" https://rebeldesignsolution.com/static/media/Main-logo.7d035ab7a861be0c8196.jpg"
            />
        </Helmet>
    );
};

const ContactUs = () => {
    const [userData, setUserData] = useState({
        yourName: "",
        yourEmail: "",
        yourPhone: "",
        yourWebite: "",
        yourServices: "",
        message: ""
    });

    useEffect(() => {
        // Fetch the user's IP address
        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                const ipAddress = response.data.ip;
                setUserData(prevState => ({ ...prevState, ipAddress }));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const postUserData = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const submitData = (event) => {
        event.preventDefault();
        const { yourName, yourEmail, yourPhone, yourWebite, yourServices, message, ipAddress } = userData;

        if (yourName && yourEmail && yourPhone && yourServices) {
            const data = {
                yourName,
                yourEmail,
                yourPhone,
                yourWebite,
                yourServices,
                message,
                ipAddress
            };

            axios.post("https://rebel-design-solutions-default-rtdb.firebaseio.com/userDataRecords.json", data)
                .then(response => {
                    setUserData({
                        yourName: "",
                        yourEmail: "",
                        yourPhone: "",
                        yourWebite: "",
                        yourServices: "",
                        message: ""
                    });
                    swal('Success!', 'Your form was submitted successfully.', 'success');
                })
                .catch(error => {
                    console.log(error);
                    swal('Something went wrong!', 'Please try again later.', 'error');
                });
        } else {
            swal('Invalid Data!', 'Please enter valid data.', 'error');
        }
    };
    return (
        <>
            <Contactus />
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
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="your-name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="your-name"
                                    placeholder="John Doe"
                                    name="yourName"
                                    value={userData.yourName}
                                    onChange={postUserData}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="your-email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="your-email"
                                    placeholder="john45@example.com"
                                    name="yourEmail"
                                    value={userData.yourEmail}
                                    onChange={postUserData}
                                    required
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="phone-number" className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone-number"
                                    placeholder="+123 4567 890"
                                    name="yourPhone"
                                    value={userData.yourPhone}
                                    onChange={postUserData}
                                    required
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="website-url" className="form-label">Website URL</label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="website-url"
                                    placeholder="www.example.com"
                                    name="yourWebite"
                                    value={userData.yourWebite}
                                    onChange={postUserData}
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="services" className="form-label">Services</label>
                                <select
                                    id="services"
                                    className="form-select"
                                    name="yourServices"
                                    value={userData.yourServices}
                                    onChange={postUserData}
                                    required
                                >
                                    <option disabled value="">
                                        PLEASE SELECT A SERVICE
                                    </option>
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
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="3"
                                    name="message"
                                    value={userData.message}
                                    onChange={postUserData}
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btns-three"
                                    onClick={submitData}
                                >
                                    SEND MESSAGE
                                </button>
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