// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import EditUser from "./pages/EditUser";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute"; // Import the route guard
import "./styles.css"; // Ensure the path to your CSS file is correct

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo">UserManagement</div>
          <nav className="navbar">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UsersList />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-user/:id"
              element={
                <PrivateRoute>
                  <EditUser />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; 2024 User Management App</p>
            <p>Designed by Aashish Verma</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
