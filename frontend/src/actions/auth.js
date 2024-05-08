import { AUTH } from "../constants";
import * as api from "../api/auth";

export const getGoogleProfile = (accessToken, navigate) => async (dispatch) => {
  try {
    const { data } = await api.fetchGoogleProfile(accessToken);
    dispatch(googleSignin(data, navigate));
  } catch (error) {
    console.log(error);
  }
};

export const postSignin = (postForm, navigate) => async (dispatch) => {
  try {
    const { data } = await api.fetchSignin(postForm);
    dispatch({
      type: AUTH,
      payload: { data: data.profile, accessToken: data.accessToken },
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const postSignup = (postForm, navigate) => async (dispatch) => {
  try {
    const { data } = await api.fetchSignup(postForm);
    dispatch({
      type: AUTH,
      payload: { data: data.profile, accessToken: data.accessToken },
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const googleSignin = (profile, navigate) => async (dispatch) => {
  try {
    const { data } = await api.fetchGoogleSignin(profile);
    dispatch({
      type: AUTH,
      payload: { data: data.profile, accessToken: data.accessToken },
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
