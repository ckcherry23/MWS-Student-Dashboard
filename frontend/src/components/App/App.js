import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Subject from '../Subject/Subject';
import useToken from './useToken';


function App() {
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    if (!token) {
        return <Login setToken={setToken}/>;
    }

    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Register" element={<Register navigate={navigate} />} />
                <Route path="/Subject" element={<Subject navigate={navigate} />} />
            </Routes>
        </div>
    );
}

export default App;