import axios from "axios";

export const fetchGoogleProfile = (accessToken) =>
  axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
  );

const instance = axios.create({
  baseURL: "http://localhost:4000/api/users",
});

export const fetchSignin = (postForm) => instance.post("/signin", postForm);
export const fetchSignup = (postForm) => instance.post("/signup", postForm);

//GOOGLE LOGIN
export const fetchGoogleSignin = (profile) =>
  instance.post("/googleSignin", profile);
