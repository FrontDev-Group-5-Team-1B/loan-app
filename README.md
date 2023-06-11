[![Netlify Status](https://api.netlify.com/api/v1/badges/7be43d64-959b-4876-b76e-81c90be205e4/deploy-status)](https://app.netlify.com/sites/loan-prediction-app-group-1b/deploys)
[![Last Commit](https://badgen.net/github/last-commit/FrontDev-Group-5-Team-1B/loan-app/dev)](https://github.com/FrontDev-Group-5-Team-1B/loan-app/commit)
[![Stars](https://badgen.net/github/stars/FrontDev-Group-5-Team-1B/loan-app/)](https://github.com/FrontDev-Group-5-Team-1B/loan-app/commit)
[![License](https://badgen.net/github/license/FrontDev-Group-5-Team-1B/loan-app/)](https://github.com/FrontDev-Group-5-Team-1B/loan-app/license)

# Loan Prediction App
## Introduction
The **Loan Prediction** application is developed to aid financial service providers to thoroughly evaluating loan applicants with convenience, effectiveness, and precision. This documentation provides an overview of the app's features, installation instructions and usage guidelines.

### Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Authors](#authors)
- [Contributing](#contributing)
- [License](#license)

### Features
- **Admin Management**:
- Register Admin: Admins can register new accounts with the app.
- Login Admin: Registered admins can log in to the app using their credentials.
Reset Password: Admins can reset their passwords if forgotten.
- Update Admin Profile: Admins can update their profile information.
- Update Admin Profile Picture: Admins can upload and manage their profile pictures.
- Download Profile Image from AWS: Admins can download their profile images from AWS.
- Delete Admin Profile Picture: Admins can delete their existing profile pictures.
- Change Password: Admins can change their current password from the setting page.
- Add an Admin: Superadmins can add new admins to the system.
- Get a Single Admin: Superadmins can retrieve details of a specific admin.
- Get All Admins: Superadmins can retrieve details of all admins.

- **Loan Management**:
- Create a New Loan: Admins can create a new loan application.
- Get a Single Loan: Admins can retrieve details of a specific loan application.
- Check Eligibility: The app assesses loan eligibility based on predefined criteria.
- Send Eligibility Status via Email: The app sends loan eligibility status to applicants via email.
- Get All Loans: Admins can retrieve details of all loan applications.
- Get All Successful Loans: Admins can retrieve details of all successfully approved loans both in ascending and descending order.
- Get All Rejected Loans: Admins can retrieve details of all rejected loan applications both in ascending and descending order.

### Prerequisites
Before installing and running the Loan Prediction App, ensure that you have the following prerequisites:

- Node.js installed on your machine
- npm (Node Package Manager) installed on your machine

### Installation
The app was built using create-react-app

- Clone the repository from GitHub:
['']

- Navigate to the project directory:

`cd loan-prediction-app`

- Install the required dependencies:

`npm install`

- Run the application:

`npm start`

### Usage
To run the Loan Prediction App, follow these steps:

Navigate to the project directory if you're not already there:

`cd loan-prediction-app`

Start the development server:

`npm start`

Open your browser and go to ['http://localhost:3000'] to access the Loan Prediction App.

Fill in the necessary information about the loan applicant in the provided input fields.

### Technologies

- Node.js
- Express.js
- MongoDB
- AWS S3
- React
- React Query

### Authors
The following students/learners contributed to the development of this project
<br/>
<a href = "https://github.com/Tanu-N-Prabhu/Python/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=FrontDev-Group-5-Team-1B/loan-app"/>
</a>

### Contributing
We welcome contributions to enhance the Loan Prediction App. To contribute, please follow these steps:

- Fork the repository.

- Create a new branch for your feature or bug fix.

- Make your modifications and commit your changes.

- Push your changes to your forked repository.

- Submit a pull request detailing your changes and their benefits.

### License
Project source code is licensed under the MIT license. You are free to fork this repository, edit the code, share and use it both for non-commercial and commercial purposes.