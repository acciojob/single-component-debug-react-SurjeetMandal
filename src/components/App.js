import React, { useState } from 'react';
import LoginForm from './LoginForm';

// Define the App component as a functional component
const App = () => {
    // State to manage the login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login
    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    return (
        <div>
            <h1>{isLoggedIn ? 'Welcome!' : 'Please log in'}</h1>
            {/* Pass the login status and login handler to the LoginForm component */}
            <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        </div>
    );
}

export default App;


