import React, { useState } from "react";
import { Container, Paper, Grid, Typography, Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";

import Input from "./Input";
import { getGoogleProfile, postSignin, postSignup } from "../../actions/auth";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [postForm, setPostForm] = useState({});
  const [isSignIn, setIsSignIn] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location.state?.path || "/";

  const redirect = () => navigate(redirectPath, { replace: true });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };

  const handleSwitchMode = () => {
    setIsSignIn((prev) => !prev);
    clear();
  };

  const handleSignIn = () => {
    console.log("sign in");
    dispatch(postSignin(postForm, redirect));
    clear();
  };
  const handleSignUp = () => {
    console.log("sign up");
    dispatch(postSignup(postForm, redirect));
    clear();
  };

  //GOOGLE LOGIN
  const loginGoogle = useGoogleLogin({
    onSuccess: (res) => googleSuccess(res),
    onError: (error) => googleFailure(error),
  });

  const googleSuccess = (response) => {
    dispatch(getGoogleProfile(response.access_token, redirect));
    clear();
  };

  const googleFailure = (error) => {
    console.log("Login Failed", error);
    clear();
  };

  const clear = () => {
    setPostForm({});
    console.log("clear");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ pt: "20px", display: "flex", justifyContent: "center" }}
    >
      <Paper sx={{ width: 280, p: "10px" }}>
        <form>
          <Grid container spacing={2}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={12}
            >
              <Typography variant="h6">
                {isSignIn ? "Signin" : "Signup"}
              </Typography>
            </Grid>
            {!isSignIn ? (
              <>
                <Input
                  label="First Name"
                  name="fName"
                  type="text"
                  value={postForm.fName || ""}
                  handleChange={handleChange}
                  half
                />
                <Input
                  label="Last Name"
                  name="lName"
                  type="text"
                  value={postForm.lName || ""}
                  handleChange={handleChange}
                  half
                />
              </>
            ) : null}
            <Input
              label="Email"
              name="email"
              type="email"
              value={postForm.email || ""}
              handleChange={handleChange}
            />
            <Input
              label="Password"
              name="password"
              value={postForm.password || ""}
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
              handleChange={handleChange}
            />
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={isSignIn ? handleSignIn : handleSignUp}
              >
                {isSignIn ? "SignIn" : "Signup"}
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ ml: "10px" }}
                onClick={loginGoogle}
              >
                Google
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isSignIn ? (
                <Typography variant="body1" color="inherit">
                  Create an account.{" "}
                </Typography>
              ) : (
                <Typography variant="body1" color="inherit">
                  Already had an account?{" "}
                </Typography>
              )}
              <Button
                variant="text"
                size="small"
                color="primary"
                onClick={handleSwitchMode}
                sx={{ textDecoration: "underline" }}
              >
                {isSignIn ? "Signup" : "Signin"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
