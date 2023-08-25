import React, { useState, useEffect } from 'react';
import Client1 from "../Images/client01.png";
import Client2 from "../Images/client02.png";
import Client3 from "../Images/client03.png";
import Client4 from "../Images/client04.png";
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const VertForm = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        yourName: "",
        yourEmail: "",
        yourPhone: "",
        yourWebite: "",
        yourServices: ""
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

    let name, value;

    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const submitData = (event) => {
        event.preventDefault();
        const { yourName, yourEmail, yourPhone, yourWebite, yourServices, ipAddress } = userData;

        if (yourName && yourEmail && yourPhone && yourServices) {
            const data = {
                yourName,
                yourEmail,
                yourPhone,
                yourWebite,
                yourServices,
                ipAddress,
                submissionTime: new Date().toLocaleString() // Capture the current date and time
            };

            axios.post("https://rebel-design-solutions-default-rtdb.firebaseio.com/userDataRecords.json", data)
                .then(response => {
                    setUserData({
                        yourName: "",
                        yourEmail: "",
                        yourPhone: "",
                        yourWebite: "",
                        yourServices: ""
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
            <div className='heighs d-flex justify-content-center align-items-center mt-3'>
                <div>
                    <form className="vert-form form-get-quote text-center">
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
                            name="yourServices"
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
