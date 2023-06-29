import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    // onHide={() => setShowPopup(false)}
    return (
        <Modal show={showPopup} onHide={() => setShowPopup(false)} centered className="modal-xl">
            <Modal.Body >
                <div className="row">
                    <div className="col-md-6 pop-img">
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-end">
                            <button className="popup-close-btn mx-2" onClick={() => setShowPopup(false)}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        </div>
                        <form className="row g-3 p-5">
                            <div className="col-md-6">
                                <label htmlFor="your-name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="your-name" placeholder="John Doe" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="your-email" className="form-label">Your Email</label>
                                <input type="email" className="form-control" id="your-email" placeholder="john45@example.com" required />
                            </div>
                            <div className="col-6">
                                <label htmlFor="phone-number" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="phone-number" placeholder="+123 4567 890" required />
                            </div>
                            <div className="col-6">
                                <label htmlFor="website-url" className="form-label">Website URL</label>
                                <input type="text" className="form-control" id="website-url" placeholder="www.example.com" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="services" className="form-label">Services</label>
                                <select id="services" className="form-select" required>
                                    <option disabled value selected>Please Select a Service</option>
                                    <option>Search Engine Optimization (SEO)</option>
                                    <option>Google Ads Management</option>
                                    <option>Social Media Marketing</option>
                                    <option>Website Design & Development</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btns-three">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body >
        </Modal>
    );
};
export default Popup