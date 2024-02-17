// Navbar.tsx
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

const Navbar: React.FC = () => {
  const [name, setName] = useState<string | null>(localStorage.getItem("name"));

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName !== name) {
      setName(storedName);
    }
  }, [name]);

  return (
    <nav className="navbar navbar-expand-lg vw-100">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav col-9">
            <a
              className="nav-link col-3 text-white"
              href="/dashboard"
              style={{ marginLeft: 100 }}
            >
              Dashboard
            </a>
            <a
              className="nav-link col-3 text-white
              "
              href="/reservation"
              style={{ marginLeft: 100 }}
            >
              Reservation
            </a>
            <a
              className="nav-link col-3 text-white"
              href="/form"
              style={{ marginLeft: 100 }}
            >
              {name}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
