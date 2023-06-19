import { useMutation, useQuery } from "react-query";
import {
  Signup,
  Signin,
  GetToken,
  UpdateProfilePicture,
  DeleteProfilePicture,
  DownloadProfilePicture,
  CreateLoan,
} from "../api/api.service";
import { VerifyToken, ResetPassword } from "../api/api.service";

export const useSignup = (onSuccess, onError) => {
  return useMutation(Signup, { onSuccess, onError });
};

export const useLogin = (onSuccess, onError) => {
  return useMutation(Signin, { onSuccess, onError });
};

export const useGetToken = (onSuccess, onError) => {
  return useMutation(GetToken, { onSuccess, onError });
};

export const useVerifyToken = (onSuccess, onError) => {
  return useMutation(VerifyToken, { onSuccess, onError });
};

export const useResetPassword = (onSuccess, onError) => {
  return useMutation(ResetPassword, { onSuccess, onError });
};

export const useUpdateProfilePicture = (onSuccess, onError) => {
  return useMutation(UpdateProfilePicture, { onSuccess, onError });
};

export const useDeleteProfilePicture = (onSuccess, onError) => {
  return useMutation(DeleteProfilePicture, { onSuccess, onError });
};

export const useDownloadprofilePicture = () => {
  return useQuery(DownloadProfilePicture);
};

export const useCreatLoan = (onSuccess, onError) => {
  return useMutation(CreateLoan, { onSuccess, onError });
};
