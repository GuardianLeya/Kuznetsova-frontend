// RegisterModal.jsx
import React, { useState } from "react";

export default function RegisterModal({ onClose, setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Replace with backend registration
    const newUser = { name, avatarUrl: "/img/avatar.jpg" };
    setUser(newUser);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <h2 className="modal-title">MovieScope</h2>

        <div className="modal-field">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Введите имя"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="modal-field">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="modal-field">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="modal-buttons">
          <button className="btn modal-login" onClick={handleRegister}>
            Register
          </button>
        </div>

        <button className="btn modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
