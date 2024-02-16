// App.tsx
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Reservation";
import Form from "./pages/Form";
import "./App.css";
import "./pages/Reservation_Form";
import Booking_Slot from "./pages/Reservation_Form";
import "./components/Navbar";
import Reservation from "./pages/Reservation";
import Reservation_Form from "./pages/Reservation_Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/Reservation_Form" element={<Reservation_Form />} />
    </Routes>
  );
}

export default App;
