import axios from "axios";

const baseURI = "https://nodebt-application.onrender.com/api";

const headers = {
  'Content-Type': 'multipart/form-data;',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};

export const Signup = (data) => {
    console.log(data)
  return axios.post(`${baseURI}/admins/signup`, data);
};

export const Signin = (data) => {
  return axios.post(`${baseURI}/admins/login`, data).then(res => res.data);
};

export const GetToken = (email) => {
  console.log(email)
  return axios.get(`${baseURI}/password-reset?email=${email}`, {passwordLink: `http://localhost:3000`});
};

export const VerifyToken = ({email, fiveDigitToken}) => {
  // console.log('hello', email, fiveDigitToken)
  return axios.post(`${baseURI}/password-reset?email=${email}`, {fiveDigitToken}, {
  // headers: {
  //   "content-type": "application/json"
  // }
  });
};

export const ResetPassword = ({email, data}) => {
  return axios.put(`${baseURI}/password-reset?email=${email}`, data);
};

export const UpdateProfilePicture = ({profileImage, adminId}) => {
  console.log({profileImage})
  return axios.put(`${baseURI}/admins/${adminId}/profile-picture`, {profileImage}, {headers: headers})
  };

  export const DeleteProfilePicture = ({profileImage, adminId}) => {
    console.log(profileImage)
    return axios.delete(`${baseURI}/admins/${adminId}/profile-picture`, profileImage, {headers: headers})
  }

  export const DownloadProfilePicture = ({adminId}) => {
    return axios.get(`${baseURI}/admins/${adminId}/profile-picture`)
  }

