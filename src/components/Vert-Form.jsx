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
import swal from 'sweetalert';



const VertForm = () => {
    const [userData, setUserData] = useState({
        yourName: "",
        yourEmail: "",
        yourPhone: "",
        yourWebite: "",
        yourServices: ""
    })
    let name, value
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value })
    }
    // Connect With Firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { yourName, yourEmail, yourPhone, yourWebite, yourServices } = userData;

        if (yourName && yourEmail && yourPhone && yourServices) {
            const res = fetch("https://rebel-design-solutions-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        yourName,
                        yourEmail,
                        yourPhone,
                        yourWebite,
                        yourServices
                    })
                },
            )
            if (res) {
                setUserData({
                    yourName: "",
                    yourEmail: "",
                    yourPhone: "",
                    yourWebite: "",
                    yourServices: ""
                })
                swal('Success!', 'Your form was submitted successfully.', 'success');
            } else {
                swal('Something went wrong!', 'Please try again later.', 'error');
            }
        } else {
            swal('Invalid Data!', 'Please enter a valid data.', 'error');
        }
    }

    return (
        <>
            <div className='heighs d-flex justify-content-center align-items-center mt-3'>
                <div>
                    <form className="vert-form form-get-quote text-center" >
                        <input type="text" placeholder="YOUR NAME" name="yourName" className="input-feilds"

                            value={userData.yourName}
                            onChange={postUserData} />
                        <input type="email" placeholder="YOUR EMAIL" name="yourEmail" className="input-feilds"

                            value={userData.yourEmail}
                            onChange={postUserData} />
                        <input type="tel" placeholder="YOUR PHONE" name="yourPhone" className="input-feilds"

                            value={userData.yourPhone}
                            onChange={postUserData} />
                        <input type="text" placeholder="YOUR WEBSITE" name="yourWebite" className="input-feilds"

                            value={userData.yourWebite}
                            onChange={postUserData} />
                        <select
                            id="services"
                            className="input-feilds"

                            value={userData.yourServices}
                            onChange={postUserData}
                            name="yourServices" // Add the name attribute for the selected option
                        >
                            <option disabled selected>
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
                        <button
                            className="form-btn"
                            type="submit"
                            onClick={submitData}
                        >
                            ANALYZE
                        </button>
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
