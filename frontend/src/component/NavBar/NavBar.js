import React from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Button,
  Icon,
  Stack,
  CssBaseline,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Box spacing={2} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5">Shop Here</Typography>
            <Icon color="primary" fontSize="large">
              <LocalGroceryStoreIcon />
            </Icon>
          </Box>
          <Stack direction="row" spacing={2} ml="auto">
            <Button
              component={NavLink}
              to="/products"
              variant="outlined"
              color="primary"
            >
              Products
            </Button>
            <Button
              component={NavLink}
              to="/about"
              variant="outlined"
              color="primary"
            >
              About
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
