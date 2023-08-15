import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactUsForm = () => {
    const navigate = useNavigate();

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
                    // swal('Success!', 'Your form was submitted successfully.', 'success');
                    navigate("/thank-you");
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
        </>
    )
}

export default ContactUsForm