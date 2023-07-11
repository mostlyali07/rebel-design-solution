import React, { useState } from 'react';
// import { firebase } from 'firebase/app';
// import { initializeApp } from "firebase/app";
// import 'firebase/database';
// import 'firebase/functions';
// import nodemailer from 'nodemailer';
import Client1 from "../Images/client01.png";
import Client2 from "../Images/client02.png";
import Client3 from "../Images/client03.png";
import Client4 from "../Images/client04.png";


const VertForm = () => {
    const [userData, setUserData] = useState({
        yourName: "",
        yourEmail: "",
        yourPhone: "",
        yourWebite: "",
        // yourServices: "",
    })
    let name, value
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value })
    }
    // // Your web app's Firebase configuration
    // const firebaseConfig = {
    //     apiKey: "AIzaSyAX8vihvhf3GIrLFXpnevQn8ZbUu7GJkWA",
    //     authDomain: "rebel-design-solutions.firebaseapp.com",
    //     projectId: "rebel-design-solutions",
    //     storageBucket: "rebel-design-solutions.appspot.com",
    //     messagingSenderId: "137022820127",
    //     appId: "1:137022820127:web:e553bbb89c99a5f8b2ea2a"
    // };
    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const formData = new FormData(form);
    //     const data = Object.fromEntries(formData.entries());

    //     firebase.database().ref('formResponses').push(data)
    //         .then(() => {
    //             console.log('Form data saved successfully');
    //         })
    //         .catch((error) => {
    //             console.error('Error saving form data:', error);
    //         });

    //     form.reset();
    // };
    // onSubmit={handleSubmit}
    return (
        <>
            <div className='heighs d-flex justify-content-center align-items-center mt-3'>
                <div>
                    <form className="vert-form form-get-quote text-center" >
                        <input type="text" placeholder="YOUR NAME" name="yourName" className="input-feilds"
                            required
                            value={userData.yourName}
                            onChange={postUserData} />
                        <input type="email" placeholder="YOUR EMAIL" name="yourEmail" className="input-feilds"
                            required
                            value={userData.yourEmail}
                            onChange={postUserData} />
                        <input type="tel" placeholder="YOUR PHONE" name="yourPhone" className="input-feilds"
                            required
                            value={userData.yourPhone}
                            onChange={postUserData} />
                        <input type="text" placeholder="YOUR WEBSITE" name="yourWebite" className="input-feilds"
                            required
                            value={userData.yourWebite}
                            onChange={postUserData} />
                        {/* <select id="services" className="input-feilds"
                            required
                            value={ }
                            onChange={postUserData}
                        >
                            <option disabled selected >
                                PLEASE SELECT A SERVICES</option>
                            <option>Graphics Design</option>
                            <option>Website Design & Development</option>
                            <option>App Development</option>
                            <option>Search Engine Optimization (SEO)</option>
                            <option>Google Ads Management</option>
                            <option>Social Media Marketing</option>
                            <option>Content Marketing</option>
                            <option>Website Content</option>
                        </select> */}
                        <button className="btns-one">ANALYZE</button>
                    </form>

                    <div className="mt-3 d-flex justify-content-center flex-wrap">
                        <img src={Client1} alt="client01" />
                        <img src={Client2} alt="client01" />
                        <img src={Client3} alt="client01" />
                        <img src={Client4} alt="client01" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default VertForm;
