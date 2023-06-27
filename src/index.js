import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="971442954116-mo6drlr37kt7c5tadolni39jiki7eire.apps.googleusercontent.com"> <App /> </GoogleOAuthProvider>;
   
  </React.StrictMode>
);
