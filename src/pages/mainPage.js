import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../reusables/navbar';


import "../styles/MainPage.css"; // Import the CSS file for styling
import { AuthContext } from "../App";


function MainPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="main-container">
    {/* Navbar */}
    <Navbar />
  
    {/* Main content */}
    <div className="main-page">
      <h1 className="main-title">Hey {user.firstName}, Welcome to this App made for 
      first CU Hackathon. </h1>
      <h1 className="main-title">
      I hope you enjoy it!
      </h1>
      <div className="button-container">
        <button onClick={() => handleNavigation("/chatPlace")} className="big-button">
          Convo with AI
        </button>
        <button onClick={() => handleNavigation("/quizMenu")} className="big-button">
          Take the Quiz
        </button>
        <button onClick={() => handleNavigation("/learnNew")} className="big-button">
          Explore New Fact
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default MainPage;
