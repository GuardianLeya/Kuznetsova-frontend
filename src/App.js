import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navbar from ".//components/Navbar.jsx";
import AppHome from "./AppHome";
import FilmPage from "./pages/FilmPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/film/:id" element={<FilmPage />} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
      </Routes>
    </Router>
  );
}