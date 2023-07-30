import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AuthContext } from '../services/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const { logIn } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(username === 'user' && password === 'password') {
            logIn();
            navigate('/'); // Navigate to homepage after successful login
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" onChange={e => setUsername(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
            </label>
            <input type="submit" value="Log In" />
        </form>
    );
};

export default LoginPage;
