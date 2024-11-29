// src/pages/EditUser.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch the user data to edit
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        if (response.data.data) {
          setUser(response.data.data);
        } else {
          setError("User not found.");
        }
      })
      .catch(() => setError("Failed to fetch user data."));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!user.first_name || !user.last_name || !user.email) {
      setError("Please fill in all fields.");
      return;
    }

    // Send the updated data to the API
    axios
      .put(`https://reqres.in/api/users/${id}`, user)
      .then(() => {
        setSuccess("User updated successfully!");
        setError(""); // Clear error if update is successful
        navigate("/users"); // Navigate to the users list page after successful update
      })
      .catch(() => setError("Failed to update user."));
  };

  return (
    <div className="edit-user-container">
      <h2>Edit User</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button className="update-button" type="submit">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
