import axios from "axios";

const baseURI = "https://nodebt-application.onrender.com/api";
const secondURI = "https://nodebtdev.onrender.com/api"

const headers = {
  'Content-Type': 'multipart/form-data;',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};

export const Signup = (data) => {
  console.log(data);
  return axios.post(`${baseURI}/admins/signup`, data);
};

export const Signin = (data) => {
  return axios.post(`${baseURI}/admins/login`, data).then((res) => res.data);
};

export const GetToken = (email) => {
  console.log(email);
  return axios.get(`${baseURI}/password-reset?email=${email}`);
};

export const VerifyToken = ({ email, fiveDigitToken }) => {
  // console.log('hello', email, fiveDigitToken)
  return axios.post(
    `${baseURI}/password-reset?email=${email}`,
    { fiveDigitToken },
    {
      // headers: {
      //   "content-type": "application/json"
      // }
    }
  );
};

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

export const ResetPassword = ({ data }) => {
  return axios.put(
    `${baseURI}/password-reset/${localStorage.getItem("adminId")}`,
    data
  );
};

//Get access token from local storage
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

export const DeleteProfilePicture = ({ formData }) => {
  return axios.delete(
    `${baseURI}/admins/647deebbc24032a06525003d/profile-picture`,
    formData
  );
};

export const DownloadProfilePicture = ({}) => {
  return axios.get(
    `${baseURI}/admins/647deebbc24032a06525003d/profile-picture`
  );
};


export const CreateNewLoan = async (formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, 
    },
  };

  const response = await axios.post(`${secondURI}/loans/create`, formData, config);
  return response.data;
};

export const sendEmail = () => {
  return axios.get(`${secondURI}/loans/send-eligibility-status?id=648359a9d79d9330ffc5df4d`);
}