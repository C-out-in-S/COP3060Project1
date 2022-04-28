import './App.css';
import SignIn from "./pages/SignIn";
import Interest from "./pages/Interest";
import VideoGameInfo from "./pages/VideoGameInfo";
import Profile from "./pages/Profile";
import {AuthProvider} from "./context/AuthContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";

function App() {
  return (
      <AuthProvider>
        <Router>
            <div id="front">
                <center><img src="http://localhost:3000/img/boldcurve.png" id="logo"/></center>
            </div>

            <Routes>
              <Route path="/" exact element={<SignIn/>}/>
              <Route path="/interests" element={<Interest/>}/>
              <Route path="/videogameinfo" element={<VideoGameInfo/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>

        </Router>
      </AuthProvider>
  );
}

export default App;
