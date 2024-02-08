// Form.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormState {
  username: string;
  password: string;
}

const Form: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    password: "",
  });
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
    // ...

    // After handling form submission, navigate to "/booking"
    navigate("/booking");
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      username: e.target.value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      password: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username :</label>
          <input
            type="text"
            value={formState.username}
            onChange={handleUsernameChange}
          />
          <br />
          <label>Password : </label>
          <input
            type="text"
            value={formState.password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
