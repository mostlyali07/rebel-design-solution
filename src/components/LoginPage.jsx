import React, { useState } from 'react';
import { auth } from 'firebase';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            const isAdmin = checkUserAdminStatus(user); // Check if the user is an admin

            if (isAdmin) {
                window.location.href = '/user-data'; // Redirect to the user data page upon successful login
            } else {
                setError('Access denied. You are not an admin.');
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    const checkUserAdminStatus = (user) => {
        // Implement your logic to check if the user is an admin
        // You can use the user's data or make an additional API call if needed
        // Return true if the user is an admin, false otherwise
        return user.isAdmin === true; // Replace this with your actual admin check logic
    };

    return (
        <div>
            <h2>Login Page</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
