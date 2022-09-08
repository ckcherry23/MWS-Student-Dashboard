import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import loginimg from '../img/loginpageimg.png';
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken({ token: token.user});

        if (token.user) {
			localStorage.setItem('token', token.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
    }

    return (
        <div className="login-wrapper">
            <img className="loginimg" src={loginimg} alt={"login"} />
            <div className={"login-container"}>
            <div className={"login-form"}>
                <h1>Log in here!</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <p/>
                    <div className='button-wrapper'>
                        <button className="button-2" type="submit">LOGIN</button>
                    </div>
                </form>
                <br/>
                <div>
                    Don't have an account? <button className='register-button' onClick={() => navigate("/register")}>Register</button>
                </div>
               </div>
            </div>

        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
