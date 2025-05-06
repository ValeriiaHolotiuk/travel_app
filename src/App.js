import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/trip/:id" element={<TripDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
