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
export const socialAuth = async (code) => {
  try {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    };

    const requestData = new URLSearchParams();
    requestData.append('code', code);
    requestData.append('client_id', '971442954116-mo6drlr37kt7c5tadolni39jiki7eire.apps.googleusercontent.com');
    requestData.append('client_secret', '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');
    requestData.append('grant_type', 'authorization_code');
    requestData.append('redirect_uri', 'localhost:5000/api/admins/signup');

    const response = await axios.post(
      'https://accounts.google.com/o/oauth2/token',
      requestData.toString(),
      { headers }
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

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


// Create a New Loan API call
export const CreateLoan = ({ formData }) => {
  return axios.post(
    `https://nodebtdev.onrender.com/api/loans/create`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
