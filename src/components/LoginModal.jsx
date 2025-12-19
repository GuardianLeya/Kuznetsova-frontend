// LoginModal.jsx
import React, { useState } from "react";

export default function LoginModal({ onClose, onRegister, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // mock backend
    const mockUser = {
      name: "Алексей",
      pfpUrl: "/img/avatar.jpg",
    };
    setUser(mockUser);
    onClose();
  };

 return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <h2 className="modal-title">MovieScope</h2>

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
          <button className="btn modal-login" onClick={handleLogin}>
            Log in
          </button>
          <button className="btn modal-register" onClick={onRegister}>
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