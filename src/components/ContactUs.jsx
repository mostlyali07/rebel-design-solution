import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="contect-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className='text-center pt-5 mt-5'>
                                <h2 className='fs-1 fw-bold'
                                >Get in<span style={{ color: '#222222' }}>  Touch </span>
                                </h2>
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
                    <div className="col-md-8">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="your-name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="your-name" placeholder="John Doe" required />
                            </div>
                            <div class="col-md-6">
                                <label for="your-email" class="form-label">Your Email</label>
                                <input type="email" class="form-control" id="your-email" placeholder="john45@example.com" required />
                            </div>
                            <div class="col-6">
                                <label for="phone-number" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="phone-number" placeholder="+123 4567 890" required />
                            </div>
                            <div class="col-6">
                                <label for="website-url" class="form-label">Website URL</label>
                                <input type="text" class="form-control" id="website-url" placeholder="www.example.com" />
                            </div>
                            <div class="col-md-12">
                                <label for="services" class="form-label">Services</label>
                                <select id="services" class="form-select" required>
                                    <option disabled value selected>Please Select a Service</option>
                                    <option>Search Engine Optimization (SEO)</option>
                                    <option>Google Ads Management</option>
                                    <option>Social Media Marketing</option>
                                    <option>Website Design & Development</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btns-three">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default ContactUs