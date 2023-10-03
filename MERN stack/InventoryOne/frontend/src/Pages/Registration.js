import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import "./Registration.css";
import { Route, Routes, redirect } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Send data to the server for registration
    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => {
        // Handle successful registration
        console.log("Registration successful!", response.data);
        // Redirect to login page upon successful registration
        // You can use useHistory hook or window.location.href
        // For example: window.location.href = '/login';
        redirect("/Main")
      })
      .catch((error) => {
        // Handle registration error
        console.error("Registration failed:", error);
        if (error.response && error.response.status === 409) {
          // If the backend responds with a 409 status (conflict)
          setErrorMessage(
            "User already exists. Please choose a different username or email."
          );
        } else {
          // For other errors, show a generic error message
          setErrorMessage("Registration failed. Please try again later.");
        }
      });
  };
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} className="registration-form-container">
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form className="registration-form" onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="submit-btn"
          >
            Register
          </Button>
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <Link href="/login" color="inherit">
              Log in
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Registration;
