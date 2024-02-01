import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;