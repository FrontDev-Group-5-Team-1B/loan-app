import axios from "axios";

const baseURI = "https://nodebt-application.onrender.com/api";

export const Signup = (data) => {
    console.log(data)
  return axios.post(`${baseURI}/users/create`, data);
};

export const Signin = (data) => {
  return axios.post(`${baseURI}/users/login`, data);
};

export const ResetPassword = (data) => {
  return axios.post(`${baseURI}/users/reset`, data);
};
