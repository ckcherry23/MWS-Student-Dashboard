import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './register.css';
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

export default function register({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await registerUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="register-wrapper">
            <img className="registerimg" src={loginimg} alt={"register"} />
            <div className={"register-wrapper2"}>
                <h1>Log in here!</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div className='button-wrapper'>
                        <button className="button-2" type="submit">register</button>
                    </div>
                </form>
                <br/>
                <div>
                    Don't have an account? <button className='register-button'>Register</button>
                </div>
            </div>
        </div>
    )
}

register.propTypes = {
    setToken: PropTypes.func.isRequired
};
