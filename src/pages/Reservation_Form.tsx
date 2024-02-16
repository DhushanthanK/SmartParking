import React, { useState } from "react";
import "./Reservation_Form.css";
import Navbar from "../components/Navbar";
import "../components/navbar.css";

const Booking_Slot: React.FC = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [bookingTime, setBookingTime] = useState("00:00");
  const [showOptions, setShowOptions] = useState(false);
  const [duration, setDuration] = useState("");

  const handleToggle = () => {
    setShowOptions((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setDuration(option);
    setShowOptions(false);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingTime(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Submitted");
  };

  return (
    <div>
      <Navbar />
      <div className="header1">
        <div className="text1">Reservation Form</div>
        <div className="underline1"></div>
        <div className="inputs1 col-12">
          <div className="input1 col-lg-6 col-8">
            <label htmlFor="vehicleNumber">Vehicle Number:</label>
            <input
              id="vehicleNumber"
              type="text1"
              placeholder="Vehicle Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>
          <div className="input1 col-lg-6 col-8">
            <label htmlFor="bookingTime">Booking Time:</label>
            <input
              id="bookingTime"
              type="time"
              placeholder="Booking Time"
              value={bookingTime}
              onChange={handleTimeChange}
            />
          </div>
          <div className="input1 col-lg-6 col-8">
            <label htmlFor="duration">Duration:</label>
            <div className="toggle-button">
              <button className="duration-btn" onClick={handleToggle}>
                {duration || "Select Duration"}
              </button>
              {showOptions && (
                <div className="options">
                  <div
                    className="option"
                    onClick={() => handleOptionClick("30 minutes")}
                  >
                    30 minutes
                  </div>
                  <div
                    className="option"
                    onClick={() => handleOptionClick("1 hour")}
                  >
                    1 hour
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default Booking_Slot;
