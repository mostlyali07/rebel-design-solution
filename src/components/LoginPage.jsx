import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

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
                window.location.href = "/user-data"; // Redirect to the user data page
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (isLoggedIn) {
        return (
            <div>
                <h2>Welcome, {email}!</h2>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row my-5 py-5">
                <form onSubmit={signIn}>
                    <label htmlFor="Email">
                        <b>Email</b>
                    </label>
                    <br />
                    <input
                        type="email"
                        placeholder="Email Address"
                        style={{ width: 300 }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor="Password">
                        <b>Password</b>
                    </label>
                    <br />
                    <input
                        type="password"
                        placeholder="Input Password"
                        style={{ width: 300 }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
