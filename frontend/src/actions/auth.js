import { AUTH } from "../constants";
import * as api from "../api/auth";

export const getGoogleProfile = (accessToken, redirect) => async (dispatch) => {
  try {
    const { data } = await api.fetchGoogleProfile(accessToken);
    dispatch(googleSignin(data, redirect));
  } catch (error) {
    console.log(error);
  }
};

export const postSignin = (postForm, redirect) => async (dispatch) => {
  try {
    const { data } = await api.fetchSignin(postForm);
    dispatch({
      type: AUTH,
      payload: { data: data.profile, accessToken: data.accessToken },
    });
    redirect();
  } catch (error) {
    console.log(error);
  }
};

export const postSignup = (postForm, redirect) => async (dispatch) => {
  try {
    const { data } = await api.fetchSignup(postForm);
    dispatch({
      type: AUTH,
      payload: { data: data.profile, accessToken: data.accessToken },
    });
    redirect();
  } catch (error) {
    console.log(error);
  }
};

export const googleSignin = (profile, redirect) => async (dispatch) => {
  try {
    const { data } = await api.fetchGoogleSignin(profile);
    dispatch({
      type: AUTH,
      payload: { data: data.profile, accessToken: data.accessToken },
    });
    redirect();
  } catch (error) {
    console.log(error);
  }
};
