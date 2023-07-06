import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GoogleOAuthProvider clientId="971442954116-mo6drlr37kt7c5tadolni39jiki7eire.apps.googleusercontent.com">
      <App />
      <ToastContainer style={{ zIndex: "999999" }} />
    </GoogleOAuthProvider>
    ;
  </>
);
