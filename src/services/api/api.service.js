import axios from "axios";

// Base URLs
const baseURI = "https://nodebt-application.onrender.com/api";
const secondURI = "https://nodebtdev.onrender.com/api"

const headers = {
  "Content-Type": "multipart/form-data;",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

// Signup API call
export const Signup = (data) => {
  console.log(data);
  return axios.post(`${baseURI}/admins/signup`, data);
};

// Login API call
export const Signin = (data) => {
  return axios.post(`${baseURI}/admins/login`, data).then((res) => res.data);
};

// Get Token API call
export const GetToken = (email) => {
  console.log(email);
  return axios.get(`${baseURI}/password-reset?email=${email}`);
};

// Verify Token API call
export const VerifyToken = ({ email, fiveDigitToken }) => {
  return axios.post(
    `${baseURI}/password-reset?email=${email}`,
    { fiveDigitToken },
    {}
  );
};

// Social Authentication API call

// Reset Password API call
export const ResetPassword = ({ data }) => {
  return axios.put(
    `${baseURI}/password-reset/${localStorage.getItem("adminId")}`,
    data
  );
};

// Get access token from local storage. Update Profile Picture API call
export const UpdateProfilePicture = ({ formData }) => {
  return axios.put(
    `${baseURI}/admins/${localStorage.getItem("adminId")}/profile-picture`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

// Delete Profile Picture API call
export const DeleteProfilePicture = ({ formData }) => {
  return axios.delete(
    `${baseURI}/admins/${localStorage.getItem("adminId")}/profile-picture`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

// Download Profile Picture API call
export const DownloadProfilePicture = ({}) => {
  return axios.get(
    `${baseURI}/admins/647deebbc24032a06525003d/profile-picture`
  );
};

// Get Eligibility email
export const sendEmail = () => {
  return axios.get(`${secondURI}/loans/send-eligibility-status?id=648359a9d79d9330ffc5df4d`)
}

// Check Eligibility Status
export const checkEligibility = () => {
  return axios.get(`${secondURI}/loans/eligibility?id=6483574dd79d9330ffc5df36`)
}
