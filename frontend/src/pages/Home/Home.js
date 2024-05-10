import { Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ py: 20 }}>
      <Typography variant="h2" sx={{ mb: "10px" }}>
        Create Your Own Shop , Browse What You Want and Make More Easier Way..
      </Typography>
      <Button
        component={NavLink}
        variant="contained"
        size="large"
        color="primary"
        to="/products"
      >
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
