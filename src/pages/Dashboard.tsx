// Dashboard.tsx
import Navbar from "../components/Navbar";
import slots from "../Parking_slots.json";
import "../Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="App text-center">
        <br />
        <br />
        <h1>Parking Slots</h1>
        <br />
        <div className="container">
          <div className="row">
            {slots.map((parking, index) => {
              const [slot, isOccupied] = Object.entries(parking)[0];
              return (
                <div
                  key={index}
                  className="col-4 mb-3 box"
                  style={{
                    borderRight: "10px solid black",
                    borderBlockEnd: "10px solid black",
                    borderStyle: "double",
                    overflow: "hidden",
                  }}
                >
                  {slot}{" "}
                  {isOccupied ? (
                    <div className="text-bg-danger text- mb imgBox">
                      <img
                        src="src/Images/car-icon-top-view-4.jpg.png"

                        alt="hello"
                        height="auto"
                        width="60%"
                        id="image-section"
                      />
                    </div>
                  ) : (
                    <div className="p-5 fs-5 text-bg-success text ">
                      <strong>Available</strong>
                    </div>
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
