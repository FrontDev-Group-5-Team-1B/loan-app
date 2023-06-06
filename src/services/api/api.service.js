import axios from "axios";

const baseURI = "https://nodebt-application.onrender.com/api";

export const Signup = (data) => {
    console.log(data)
  return axios.post(`${baseURI}/admins/signup`, data);
};

export const Signin = (data) => {
  return axios.post(`${baseURI}/admins/login`, data).then(res => res.data);
};

export const GetToken = (email) => {
  console.log(email)
  return axios.get(`${baseURI}/password-reset?email=${email}`);
};

export const VerifyToken = ({email, fiveDigitToken}) => {
  console.log('hello', email, fiveDigitToken)
  return axios.post(`${baseURI}/password-reset?email=${email}`, fiveDigitToken);
};

export const ResetPassword = ({email, data}) => {
  return axios.put(`${baseURI}/password-reset?email=${email}`, data);
};