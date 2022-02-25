import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./LoginScreen.css";

const LoginScreen = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const {data} = await axios.post("/api/auth/login", {email, password},
            config);

            localStorage.setItem("authToken", data.token);
            history.push("/");
        } catch (error) {
            // setError(error.response.data.error);
            // setTimeout(() => {
            //     setError("");
            // }, 5000);
        }

    }

    return (
        <div className="login-screen">
            <form onSubmit={registerHandler} className="login-screen_form" action="/ProfileScreen">

            <h1 className="app-title">CULTIVATE</h1>
                <h3 className="login-screen_title">Login</h3>
                {/* {error && <span>{error}</span>} */}
                <div classname="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        required id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">password:</label>
                    <input
                        type="password"
                        required id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn-primary">
                    login
                </button>
            </form>
        </div>

    );
}

export default LoginScreen;