import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { Toolbar, Button } from "@mui/material";

import NavBar from "../component/NavBar/NavBar";

const Root = () => {
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
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
          style={activeStyle}
          component={NavLink}
          to="/products"
          variant="text"
          color="primary"
        >
          Products
        </Button>
        {"|"}
        <Button
          style={activeStyle}
          component={NavLink}
          to="/profile"
          variant="text"
          color="primary"
          sx={{ ml: "10px" }}
        >
          Profile
        </Button>
      </Toolbar>
      <Outlet />
    </div>
  );
};

export default Root;
