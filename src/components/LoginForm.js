import React, { useState } from 'react';

// Define the LoginForm component as a functional component
const LoginForm = ({ isLoggedIn, onLogin }) => {
    // State to manage form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onLogin function passed down from the parent component
        onLogin();
    }

    if (isLoggedIn) {
        return <p>You are already logged in.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;
