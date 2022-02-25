import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./RegisterScreen.css";

const RegisterScreen = ({ history }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
            const { data } = await axios.post("/api/auth/register", { email, password },
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
        <div className="register-screen">
            <form onSubmit={registerHandler} className="register-screen_form" action="/ProfileScreen">
                <h1 className="app-title">CULTIVATE</h1>
                <h3 className="register-screen_title">Register</h3>
                {/* {error && <span>{error}</span>} */}
                <div className="formContainer">
                    <div classname="email-style">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            required id="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            required id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="firstName">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="First_Name"
                            required id="first name"
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="lastName">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="lastName"
                            required id="lastName"
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className="someTextContainer">
                    <a className="anchorSomeText" href="/login">
                        <span className="register-screen__sumtext">
                            Already have an account? </span> </a>
                </div>
                <div className="registerButtonContainer">
                    <a className="anchorButton" href="/profile">
                    {/* <button type="submit" className="btn-primary"> */}
                    <button className="btn-primary">
                        Register
                    </button></a>
                </div>
            </form>
        </div>

    );
}



// const RegisterScreen = ({ history }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     // Is User logged in?
//     useEffect(() => {
//         if (localStoarage.getItem("sendToken")) {
//             history.push("/");
//         }
//     }, [history]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const config = {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         };

//         // Does the password match?
//         if (password !== confirmPassword) {
//             setPassword("");
//             setTimeout(() => {
//                 setError("");
//             }, 5000);
//             return setError("Password do not match");
//         }
//         try {
//             const { data } = await axios.post(
//                 "/api/register",
//                 { email, password },
//                 config
//             );

//             localStorage.set.Item("sendToken");

//             history.push("/");
//     } catch (error) {
//         setError(error.response.data.error);
//         setTimeout(() => {
//             setError("");
//         }, 5000);
//     }
// };

// return(
//     <div classname="form">
//         <form id="register" className="form-content" onSubmit={handleSubmit}>
//             <h3 className="form-heading">Register</h3>
//             <div className="form-group">
//                 {error && <span className="error">{error}</span>}
//                 <label>Email</label>
//                 <input
//                 required type="text"
//                 id="emailInput"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//         </form>
//     </div>
// )



export default RegisterScreen;