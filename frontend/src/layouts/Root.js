import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { Toolbar, Button } from "@mui/material";

import NavBar from "../component/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Toolbar
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <Button
          component={NavLink}
          to="/products"
          variant="text"
          color="primary"
        >
          Products
        </Button>
        {"|"}
        <Button
          component={NavLink}
          to="/about"
          variant="text"
          color="primary"
          sx={{ ml: "10px" }}
        >
          About
        </Button>
      </Toolbar>
      <Outlet />
    </div>
  );
};

export default Root;
