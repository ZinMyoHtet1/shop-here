import React, { useEffect, useState } from "react";
import decode from "jwt-decode";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Button,
  Icon,
  Stack,
  CssBaseline,
  Avatar,
} from "@mui/material";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants";

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = user?.accessToken;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
  };

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
          {user ? (
            <Stack direction="row" spacing={2} ml="auto" alignItems="center">
              <Avatar src={user?.profile?.picture} size="small">
                {user?.profile?.name.split("")[0]}
              </Avatar>
              <Typography variant="body2" color="inherit">
                {user?.profile?.email}
              </Typography>
              <Button
                component={NavLink}
                variant="contained"
                color="error"
                onClick={logout}
              >
                Logout
              </Button>
            </Stack>
          ) : (
            <Button
              component={NavLink}
              variant="contained"
              color="primary"
              to="/auth"
              sx={{ ml: "auto" }}
            >
              Sigin
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
