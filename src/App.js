import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import Navbar from "./pages/Navbar";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/trip/:id" element={<TripDetailsPage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
