// Navbar.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import "../App.css";

export default function Navbar({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/"); // redirect to home
  };

  return (
    <header className="navbar">
      <div className="container nav-content">
        {/* Logo */}
        <span className="logo">
          <Link to="/">MovieScope</Link>
        </span>

        {/* Navigation links */}
        <nav className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/">Фильмы</Link>
          <Link to="/">Сериалы</Link>
          <Link to="/">Избранное</Link>
        </nav>

        {/* Search bar + User/Login */}
        <div className="nav-user-section">
          <input type="text" placeholder="Введите название" className="search-bar" />

          {!user ? (
            <button className="btn login" onClick={() => setShowLogin(true)}>
              Войти
            </button>
          ) : (
            <div className="user-info">
              <Link to="/profile">
                <img src={user.avatarUrl} alt="avatar" className="user-avatar" />
              </Link>
              <button className="btn logout" onClick={handleLogout}>
                Выйти
              </button>
            </div>
          )}
        </div>

        {/* Modals */}
        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
            setUser={setUser}
          />
        )}
        {showRegister && <RegisterModal onClose={() => setShowRegister(false)} setUser={setUser} />}
      </div>
    </header>
  );
}
