import React, { useState } from "react";
import "../Form.css";
import Navbar from "../components/Navbar";

const Form: React.FC = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div>
      <Navbar />
      <div className="container bg-transparent align-content-center mt-1">
      <div className="submit-container-select col-12 ">
        <div
          className={action === "Login" ? "col-lg-3 col-6 btn btn-success" : "col-lg-3 col-6 btn btn-light"}
          onClick={() => {
            setAction("Login");
          }}
        >
          <div>Log In</div>
        </div>
        <div
          className={action === "Sign Up" ? "col-lg-3 col-6  btn btn-success" : "col-lg-3 col-6 btn btn-light"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          <div>Sign Up</div>
        </div>
      </div>
      <div className="bg-transparent">
        <div className="header">
          <div className="text text-center">{action}</div>
          <div className="underline col-2"></div>
          

          {/* Sajeethan defined start node of Login Form */}
          {action === "Login" ? null : (
              <div className="col-6">
              <div className="form1 d-flex flex-column text-center">
                <form action="" method="post">
                  <div className="form-floating col-12 mb-3">
                    <input type="text" name="uName" className="form-control" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Username</label>       
                  </div>
                  <div className="form-floating col-12 mb-3">
                    <input type="text" name="fName" className="form-control" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Full Name</label>       
                  </div>
                  <div className="form-floating col-12 mb-3">
                    <input type="password" name="pw" className="form-control" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Password</label>       
                  </div>
                  <div className="form-floating col-12 mb-3">
                    <input type="password" name="cpw" className="form-control" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Confirm Password</label>       
                  </div>
                  <button className="btn btn-warning col-5" type="submit">Submit</button>
                </form>
              </div>
            </div>
            )}
          
          {/* Sajeethan defined start node of SignUp Form */}
          {action === "Sign Up" ? null : (
            <div className="col-6">
              <div className="form1 d-flex flex-column text-center">
                <form action="" method="post">
                  <div className="form-floating col-12 mb-3">
                    <input type="text" name="uName" className="form-control" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Username</label>       
                  </div>
                  <div className="form-floating col-12 mb-3">
                    <input type="password" name="pw" className="form-control" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Password</label>       
                  </div>
                  <button className="btn btn-warning col-5" type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
          {/*  */}
       
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Form;
