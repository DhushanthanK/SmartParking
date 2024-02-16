import React from "react";
import "./Reservation_Form.css";

const Reserve_Button: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = "/Reservation_Form";
  };

  return (
    <div className="submit-container">
      <button className="submit btnclass" onClick={handleButtonClick}>
        Next
      </button>
    </div>
  );
};

export default Reserve_Button;
