// src/pages/UsersList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton"; // Logout button component

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch users list with pagination
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => {
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      })
      .catch(() => {
        setError("Failed to fetch users!");
      });
  }, [currentPage]);

  const handleDelete = (id) => {
    // Delete user using DELETE API
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id)); // Remove user from list
        setMessage("User deleted successfully!");
        setError("");

        // Remove the success message after 1 second
        setTimeout(() => {
          setMessage("");
        }, 2000);
      })
      .catch(() => {
        setMessage("");
        setError("Failed to delete user!");
      });
  };

  return (
    <div className="users-container">
      <h2>User List</h2>
      {message && <div className="success">{message}</div>}
      {error && <div className="error">{error}</div>}
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
              <Link to={`/edit-user/${user.id}`} className="button edit-button">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="button delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <LogoutButton /> {/* Logout button */}
    </div>
  );
};

export default UsersList;
