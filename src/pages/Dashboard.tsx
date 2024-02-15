// Dashboard.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import slots from "../Parking_slots.json";
import "./Dashboard.css";
import Button_Booking from "./Button_Booking";

function Dashboard() {
  const [buttonStates, setButtonStates] = useState(
    Array(slots.length).fill(false)
  ); // Initialize button states

  const handleColorChange = (index: number) => {
    const newButtonStates = buttonStates.map((_, i) => i === index);
    setButtonStates(newButtonStates);
  };

  return (
    <div>
      <Navbar />
      <div className="App text-center">
        <br />
        <br />
        <h1 style={{ color: "white" }}>Parking Slots</h1>
        <br />
        <div className="container-fluid " id="box">
          <div className="row">
            {slots.map((parking, index) => {
              const [slot, isOccupied] = Object.entries(parking)[0];
              return (
                <div
                  key={index}
                  className="col-4 mb-3 box d-flex flex-column align-items-center justify-content-center box"
                  style={{
                    backgroundColor: "white",
                    background: "white",
                    borderRight: "10px solid black",
                    borderBlockEnd: "10px solid black",
                    borderStyle: "double",
                    overflow: "hidden",
                    // Fixed width for each grid cell
                    // Fixed height for each grid cell
                  }}
                >
                  {slot}
                  <br></br>
                  {isOccupied ? (
                    <div className="text-bg-danger text- mb imgBox">
                      <img
                        src="src\Images\car-icon-top-view-4.jpg.png"
                        alt="hello"
                        height="80%"
                        width="95%"
                        className="img-fluid"
                        id="image-section"
                      />
                    </div>
                  ) : (
                    <Button_Booking
                      initialColor="green"
                      handleColorChange={() => handleColorChange(index)}
                      isActive={buttonStates[index]}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;