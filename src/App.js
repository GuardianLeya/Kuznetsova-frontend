import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import FilmPage from "./pages/FilmPage";
import ProfilePage from "./pages/ProfilePage";
import AppHome from "./AppHome";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/film/:id" element={<FilmPage />} />
        <Route
          path="/profile"
          element={<ProfilePage user={user} setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
}
