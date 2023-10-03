import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // State to store user data

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const navDashboard = () => {
    navigate("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send data to the server for login
      const response = await axios.post("http://localhost:5000/login", formData);
  
      // Handle successful login
      console.log("Login successful!", response.data);
  
      // Store the user data in frontend state
      setUser(response.data);
  
      // Update the login status
      setLoggedIn(true);
      setErrorMessage("");
  
      // Redirect to the dashboard
      navDashboard(); // Call the navigation function
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      if (error.response && error.response.status === 404) {
        setErrorMessage("User not found. Please check your credentials.");
      } else {
        setErrorMessage("Login failed. Please try again later.");
      }
    }
  };
  

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} className="login-form-container">
        <Typography variant="h5" gutterBottom>
          Log In
        </Typography>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="submit-btn"
          >
            Log In
          </Button>
          <Typography variant="body2" align="center">
            Don't have an account?{" "}
            <Link href="/register" color="inherit">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
