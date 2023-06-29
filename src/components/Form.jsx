import React, { useState } from 'react';
import axios from 'axios';

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('/api/submitForm', formData); // Assuming your backend API endpoint is '/api/submitForm'
        // Email sent and data saved successfully
        setFormData({
            name: '',
            email: '',
            phone: '',
            website: '',
            services: '',
        });
    } catch (error) {
        // Handle any error that occurs during the submission
        console.log(error);
    }
};

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        services: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to the backend and MongoDB
        // Reset the form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            website: '',
            services: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website"
            />
            <select
                name="services"
                value={formData.services}
                onChange={handleChange}
            >
                <option value="">Select a service</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
                <option value="Service 3">Service 3</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
