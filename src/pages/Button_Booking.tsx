// Button_Booking.tsx
import React, { useState } from "react";

interface ButtonBookingProps {
  initialColor: string;
  handleColorChange: () => void;
  isActive: boolean;
}

const Button_Booking: React.FC<ButtonBookingProps> = ({
  initialColor,
  handleColorChange,
  isActive,
}) => {
  const [buttonColor, setButtonColor] = useState(initialColor);

  const handleButtonClick = () => {
    handleColorChange(); // Call the parent function to reset other buttons
    // Toggle between blue and green colors
    const newColor = buttonColor === "green" ? "red" : "green";
    setButtonColor(newColor);
  };

  return (
    <button
      type="button"
      className="btn custom-btn btn-primary"
      style={{ backgroundColor: isActive ? "red" : "green" }}
      onClick={handleButtonClick}
      id="btn-custom-btn"
    >
      Available
    </button>
  );
};

export default Button_Booking;
