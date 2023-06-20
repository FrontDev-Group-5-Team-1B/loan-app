import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import useBorrowersDataStore from "../../store/borowersDataStore";
import { useCreatLoan } from "../../services/query/query.service";
import { useMutation } from "react-query";
import axios from "axios";

const FullBProfile = () => {
  const [ModalIsopen, setModalisopen] = useState(false);
  const { formData } = useBorrowersDataStore();
  // console.log(formData);
  // console.log(formData.guarantor);

  // const { mutate, error, isLoading } = useCreatLoan();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   mutate(formData);
  //   setModalisopen(true);
  // };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "50px",
    },
  };
  const createLoan = async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        "https://nodebt-application.onrender.com/api/loans/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;

      console.log(response.data);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const mutation = useMutation(createLoan);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
    console.log("formData", formData);
  };

  return (
    <div className="borrow-wrap">
      <div>
        <div className="generated-flex">
          <Link
            to="/dashboard/borrow"
            style={{ textDecoration: "none", color: "#808080" }}
          >
            Input Borrower's data
          </Link>
          <p className="arrowimg">
            {" "}
            <MdKeyboardArrowRight />
          </p>
          <h3>Borrower's data preview</h3>
        </div>
        <div className="b-header">
          <h2>Borrowers Data Preview</h2>{" "}
        </div>
        <div className="p-fbp">
          <p className="fbp-header2">Personal and contact information</p>
          <div className="fbp-flex">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Mrs Tumise Anudolapo"
                  className="placeholder"
                  value={formData.fullname}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="anu@yahoo.com"
                  className="placeholder"
                  value={formData.email}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="45 cresent Ikeja"
                  className="placeholder"
                  value={formData.address}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Unemployed"
                  className="placeholder"
                  value={formData.employmentType}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Marital Status"
                  className="placeholder"
                  value={formData.maritalStatus}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Job Sector"
                  className="placeholder"
                  value={formData.jobSector}
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="+2346587512520"
                  className="placeholder"
                  value={formData.phoneNumber}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Age"
                  className="placeholder"
                  value={formData.age}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="********"
                  className="placeholder"
                  value={formData.nationalIdentityNumber}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="10,000"
                  className="placeholder"
                  value={formData.incomePerMonth}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Gender"
                  className="placeholder"
                  value={formData.gender}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="jobRole"
                  className="placeholder"
                  value={formData.jobRole}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="l-fbp">
          <p className="fbp-header2">Loan Information</p>
          <div className="fbp-flex">
            <div>
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Student Loan"
                  className="placeholder"
                  value={formData.loanType}
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Upload Credit report"
                  className="placeholder"
                  value={formData.loanAmount}
                />
              </div>
            </div>
            <div>
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Repayment Term"
                  className="placeholder"
                  value={formData.repaymentType}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Upload credit score"
                  className="placeholder"
                  // value={formData.fullname}
                />
              </div>
            </div>
          </div>
          <textarea className="fbp-text" value={formData.purposeOfLoan}>
            Purpose of loan
          </textarea>
        </div>

        <div className="c-fbp">
          <p className="fbp-header2">Collateral Information</p>
          <div className="fbp-flex">
            <div>
              <input
                type="text"
                placeholder="Type of Asset"
                className="placeholder"
                value={formData.collateralType}
                name="colateralType"
              />
            </div>
            <div>
              {" "}
              <input
                type="text"
                placeholder="Collateral Value"
                className="placeholder"
                value={formData.collateralValue}
              />
            </div>
          </div>
          <textarea className="fbp-text" value={formData.collateralInformation}>
            Provide collateral information e.g location, car model, mileage
            e.t.c
          </textarea>
        </div>

        <div className="g-fbp">
          <p className="fbp-header2">Guarantor's Information</p>
          <div className="fbp-flex">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="placeholder"
                  value={formData.guarantor.fullname}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="placeholder"
                  value={formData.guarantor.email}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="placeholder"
                  value={formData.guarantor.address}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="relationship"
                  className="placeholder"
                  value={formData.guarantor.relationship}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Other sources of income"
                  className="placeholder"
                  value={formData.guarantor.otherSourcesOfIncome}
                />
              </div>
            </div>

            <div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="placeholder"
                  value={formData.guarantor.phoneNumber}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="age"
                  className="placeholder"
                  value={formData.guarantor.age}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Social Security Number"
                  className="placeholder"
                  value={formData.guarantor.socialSecurityNumber}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="EmploymentType"
                  className="placeholder"
                  value={formData.guarantor.employmentType}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Income per month"
                  className="placeholder"
                  value={formData.guarantor.incomePerMonth}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="fbp-grade">
          <p>
            <i>
              After carefully previewing the borrower's data form, go ahead to
              upload and check loan eligibilty to predict loan default
            </i>
          </p>
        </div>
        <div className="fbp-admin">
          <p>Admin in charge </p>
          <div>
            <input
              type="text"
              placeholder="Input Name"
              className="placeholder"
            />
          </div>
        </div>

        <div>
          <div className="f-btn-div">
            <button type="submit" onClick={handleSubmit} className="f-btn">
              Upload Data
            </button>
          </div>
          <Modal
            isOpen={ModalIsopen}
            onRequestClose={() => setModalisopen(false)}
            style={customStyles}
          >
            <div className="bs-preview">
              <h6>Borower's data has been Uploaded successfully!</h6>
              <Link to="/dashboard/eligibilitystatus">
                <button>Check Eligibility Status</button>
              </Link>
            </div>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default FullBProfile;
