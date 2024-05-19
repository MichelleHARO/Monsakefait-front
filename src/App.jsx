import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/homepage" element={<HomePage/>}/>
              <Route path="/" element={<Navigate to="/login"/>}/>
          </Routes>
      </Router>
  )
}
