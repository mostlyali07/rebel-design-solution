import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { auth } from 'firebase'; // Import your Firebase authentication instance

const LoginPage = () => {
    const history = useHistory(); // Access the history object
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
            await auth.signInWithEmailAndPassword(email, password);
            // Redirect to the user data page upon successful login
            history.push('/user-data');
        } catch (error) {
            setError('Invalid email or password');
        }
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
