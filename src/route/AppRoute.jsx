import React from 'react';
import {Routes,Route} from "react-router-dom";
import Login from '../components/Login/Login';
import AddPage from '../pages/AddPage';
import Homepage from '../pages/HomePage';

const Approute = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<AddPage />} />
        </Routes>
    );
}

export default Approute;
