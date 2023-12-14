import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignInPrompt from '../reusables/login';
import MainPage from '../pages/mainPage';
import ChatApp from '../pages/chatPlace';
import QuizMenu from '../pages/quizMenu';
import Profile from '../pages/profile';
import { AuthContext } from '../App';
import RegisterPrompt from '../reusables/Register';


import LearnNew from '../pages/learnNew';

const RouteConfig= () => {
    const { user } = useContext(AuthContext);
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <MainPage />: <SignInPrompt />} />
          <Route path="/mainPage" element={user ? <MainPage /> : <Navigate to='/'/> } />
          <Route path="/chatPlace" element={user ? <ChatApp /> : <Navigate to='/' />} />
          <Route path="/quizMenu" element={user ? <QuizMenu /> : <Navigate to='/' />} />         
          <Route path="/profile" element={user ? <Profile /> : <Navigate to='/' />} />
          <Route path="/register" element={!user ? <RegisterPrompt /> : <Navigate to='/' />} />
          <Route path="/login" element={!user ? <SignInPrompt /> : <Navigate to='/' />} />
          <Route path="/learnNew" element={<LearnNew /> } />
        </Routes>
      </BrowserRouter>
    );
}

export default RouteConfig;