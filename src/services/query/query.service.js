import { useMutation } from "react-query";
import { Signup, Signin } from "../api/api.service";

export const useSignup = (onSuccess, onError) => {
  return useMutation(Signup, { onSuccess, onError });
};

export const useLogin = (onSuccess, onError) => {
  return useMutation(Signin, { onSuccess, onError });
};
