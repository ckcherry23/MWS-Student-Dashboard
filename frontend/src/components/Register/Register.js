import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Register.css';
import loginimg from '../img/loginpageimg.png';
import { useNavigate } from "react-router-dom";

async function registerUser(credentials) {
    return fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await registerUser({
            name,
            email,
            password
        });

        if (token.status === 'ok') {
			navigate('/login');
		}
    }

    return (
        <div className="register-wrapper">
            <img className="registerimg" src={loginimg} alt={"register"} />
            <div className={"register-wrapper2"}>
                <h1>Welcome!</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Name</p>
                        <input type="text" onChange={e => setName(e.target.value)} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div className='button-wrapper'>
                        <button className="button-2" type="submit">Register</button>
                    </div>
                </form>
                <br/>
                <div>
                    Already have an account? <button className='login-button' onClick={() => navigate("/login")} >Login</button>
                </div>
            </div>
        </div>
    )
}