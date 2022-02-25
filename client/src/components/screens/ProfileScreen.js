import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./ProfileScreen.css";


const ProfileScreen = () => {

    return (
        <div className="profile-screen">
            <h1 className="app-title">CULTIVATE</h1>
            {/* <h3 className="screen_title">Hello First Name</h3> */}
            <p className="display-contact"> Display Contacts, ordered by birthday</p>
            <div>
                <button type="submit" className="btn-primary">
                    Add Contact
                </button>
            </div>
        </div>

    );
};


export default ProfileScreen;