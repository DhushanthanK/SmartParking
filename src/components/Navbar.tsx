// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark vw-100" >
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
              className="nav-link disabled col-3 text-grey"
              href="/booking"
              style={{ marginLeft: 100 }}
            >
              Booking
            </a>
            <a
              className="nav-link col-3 text-white"
              href="/form"
              style={{ marginLeft: 100 }}
            >
              Log In
            </a>
          </div>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
