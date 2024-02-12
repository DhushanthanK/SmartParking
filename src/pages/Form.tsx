// Form.tsx
import React, { useState } from "react";
//import { Form, useNavigate } from "react-router-dom";
import "../Form.css";

const Form: React.FC = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src="src/assets/person.png" alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src="src/assets/email.png" alt="" />
            <input type="text" placeholder="E-mail" />
          </div>
          <div className="input">
            <img src="src/assets/password.png" alt="" />
            <input type="text" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot Password? <span>Click Here</span>
          </div>
        )}
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Form;
