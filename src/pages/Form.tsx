import React, { useState } from "react";
import "../Form.css";
import Navbar from "../components/Navbar";

const Form: React.FC = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div>
      <Navbar />
      <div className="submit-container-select">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Log in
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Create Account
        </div>
      </div>
      <div className="container bg-transparent">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
          <div className="inputs">
            {action === "Login" ? null : (
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
              <input type="text" placeholder="Enter a Password" />
            </div>

            {action === "Login" ? null : (
              <div className="input">
                <img src="src/assets/person.png" alt="" />
                <input type="text" placeholder="Confirm Password" />
              </div>
            )}
          </div>
          {action === "Sign Up" ? null : (
            <div>
              <div className="forgot-password">
                Forgot Password? <span>Click Here</span>
              </div>
            </div>
          )}
          {action === "Sign Up" ? (
            <div
              className="Button"
              onClick={() => {
                //setAction("Login");
              }}
            >
              Create Account
            </div>
          ) : (
            <div>
              <div
                className="Button"
                onClick={() => {
                  //setAction("Login");
                }}
              >
                Log in
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
