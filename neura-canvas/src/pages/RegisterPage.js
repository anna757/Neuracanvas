import React, { useContext, useState } from 'react';
import { AuthContext } from '../services/AuthContext';

const RegisterPage = () => {
    const { logIn } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('Passwords do not match');
        } else if(localStorage.getItem(username)) {
            alert('Username already registered');
        } else {
            const user = {username, password};
            localStorage.setItem(username, JSON.stringify(user));
            logIn();
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
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} required />
            </label>
            <input type="submit" value="Register" />
        </form>
    );
};

export default RegisterPage;
