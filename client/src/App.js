import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import privateRoute from "../routes/privateRoutes";
// import logo from './logo.svg';
// import './App.css';

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";

const App = () => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  const renderProfile = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.email}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}

// import RegisterScreen from "./components/screens/RegisterScreen";
// // import "./components/screens/LoginScreen";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Routes>
//         <Route path="/register" component={<RegisterScreen />}/>
//         {/* <Route path="/login" component={<LoginScreen />}/> */}
//         </Routes>
//         </div>
//     </BrowserRouter>
//   )
// }

export default App;
