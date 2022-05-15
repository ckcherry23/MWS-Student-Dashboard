import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigationType } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Subject from '../Subject/Subject';
import useToken from './useToken';


function App() {
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Subject" element={<Subject navigate={navigate} />} />
            </Routes>
        </div>
    );
}

export default App;