import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import UserDataList from "./UserDataList";
import swal from 'sweetalert';


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                setIsLoggedIn(true);
                localStorage.setItem("isLoggedIn", true); // Store login state in localStorage
            })
            .catch((error) => {
                console.log(error);
                swal('Error', 'Please enter correct information.', 'error');
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setIsLoggedIn(false);
                localStorage.removeItem("isLoggedIn"); // Remove login state from localStorage
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        // Check if the user is logged in on component mount
        const storedLoginStatus = localStorage.getItem("isLoggedIn");
        if (storedLoginStatus) {
            setIsLoggedIn(true);
        }
    }, []);

    if (isLoggedIn) {
        return (
            <div className="back-login">
                <div className="container py-5 pt-5 mt-5">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <h2>Welcome, {email}!</h2>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <button onClick={handleSignOut} className="btn btn-dark">Sign Out</button>
                        </div>
                    </div>
                    <UserDataList />
                </div>
            </div>
        );
    }

    return (
        <div className="form-login">
            <div className="main-login">
                <div className="row">
                    <form onSubmit={signIn}>
                        <label htmlFor="Email">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            style={{ width: 300 }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                        />
                        <br />
                        <label htmlFor="Password">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Input Password"
                            style={{ width: 300 }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                        />
                        <br />
                        <button type="submit" className="btn btn-light">Login</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default LoginForm;
