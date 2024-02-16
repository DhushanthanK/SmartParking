// Dashboard.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import slots from "../Parking_slots.json";
import "./Dashboard.css";
import Button_Reserve from "./Button_Select_Slot";
import Reserve from "./Reserve_Button";

function Booking() {
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
        <h1 style={{ color: "white", fontWeight: "bold", fontSize: "3vw" }}>
          Select an available slot
        </h1>
        <div className="bg-transparent">
          <div className="header">
            <div className="text text-center"></div>
            <div className="underline col-2"></div>
            <div className="container-fluid " id="box">
              <div
                className="row"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.5vw",
                }}
              >
                {slots.map((parking, index) => {
                  const [slot, isOccupied] = Object.entries(parking)[0];
                  return (
                    <div
                      key={index}
                      className="col-4 mb-3 box d-flex flex-column align-items-center justify-content-center"
                      style={{
                        backgroundColor: "transparent",
                        background: "transparent",
                        borderRight: "10px solid white",
                        borderBlockEnd: "10px solid white",
                        borderStyle: "solid white",
                        overflow: "hidden",

                        // Fixed width for each grid cell
                        // Fixed height for each grid cell
                      }}
                    >
                      {slot}
                      <br></br>
                      {isOccupied ? (
                        <div className="transparent text- mb-2 imgBox">
                          <img
                            src="src\Images\car-icon-top-view-4.jpg.png"
                            alt="hello"
                            height="70%"
                            width="85%"
                            className="img-fluid"
                            id="image-section"
                          />
                        </div>
                      ) : (
                        <Button_Reserve
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
            <br></br>
            <div>
              <Reserve />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
