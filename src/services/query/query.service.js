import { useMutation } from "react-query";
import { Signup, Signin, GetToken } from "../api/api.service";
import { VerifyToken, ResetPassword } from "../api/api.service";

export const useSignup = (onSuccess, onError) => {
  return useMutation(Signup, { onSuccess, onError });
};

export const useLogin = (onSuccess, onError) => {
  return useMutation(Signin, { onSuccess, onError });
};

export const useGetToken = (onSuccess, onError) => {
  return useMutation(GetToken, {onSuccess, onError})
}

export const useVerifyToken = (onSuccess, onError) => {
  return useMutation(VerifyToken, {onSuccess, onError})
}

export const useResetPassword = (onSuccess, onError) => {
  return useMutation(ResetPassword, {onSuccess, onError})
}