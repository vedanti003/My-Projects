import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <Container maxWidth="xs">
      <div className="home-container">
        <Typography variant="h4" gutterBottom>
          Inventory App
        </Typography>
        <div className="button-container">
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            className="home-btn"
          >
            Log In
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="secondary"
            className="home-btn"
          >
            Register
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
