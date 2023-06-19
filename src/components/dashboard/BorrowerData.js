import React, { useState } from "react";
import Borrow from "./Borrow.dashboard";
import BorrowerLoanInfo from "./BorrowerLoanInfo";
import DashCollaInfo from "./DashCollaInfo";
import DashGInfo from "./DashGInfo";
import FullBProfile from "./FullBProfile";
import Modal from "react-modal";
// import { UseCreateNewLoan } from "../../services/query/query.service";

const formField = {
  guarantor: {
    fullname: "",
    phoneNumber: "",
    email: "",
    address: "",
    socialSecurityNumber: "",
    relationship: "",
    incomePerMonth: "",
    otherSourcesOfIncome: "",
    age: "",
    employmentType: "",
  },
  gender: "",
  maritalStatus: "",
  jobRole: "",
  jobSector: "",
  loanAmount: "",
  age: "",
  fullName: "",
  email: "",
  address: "",
  employmentType: "",
  phoneNumber: "",
  nationIdentityNumber: "",
  incomePerMonth: "",
  loanType: "",
  repaymentType: "",
  PurposeOfLoan: "",
  collateralType: "",
  collateralValue: "",
  collateralInformation: "",
};

const BorrowerData = () => {
  const [formData, setFormData] = useState(formField);
  const [page, setPage] = useState(1);
  const {
    fullname,
    guarantor,
    email,
    address,
    employmentType,
    phoneNumber,
    nationalIdentityNumber,
    incomePerMonth,
    loanAmount,
    purposeOfLoan,
    loanType,
    collateralType,
    age,
    gender,
    jobSector,
    maritalStatus,
    jobRole,
    repaymentType,
    collateralValue,
    collateralInformation,
  } = formData;

  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [ModalTwo, setModalTwo] = useState(false);

  // const { mutate } = UseCreateNewLoan()


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("guarantor.")) {
      const guarantorName = name.split(".")[1];
      // console.log(guarantorName)
      setFormData((prevState) => ({
        ...prevState,
        guarantor: {
          ...prevState.guarantor,
          [guarantorName]: value,
        },
      }));
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setPage(page - 1);
    return;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (page === "preview") {
      // setModalIsOpen(false)
      setPage("");
      return;
    }
    if (page === "modal") {
      setModalIsOpen(false);
      setPage("preview");
      return;
    }
    if (page < 4) {
      setPage(page + 1);
    } else {
      setModalIsOpen(true);
      setPage("modal");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalTwo(true);
    console.log(formData);
    // mutate(formData)
  };

  // const handleCancel = () => {
  //   window.history.back();
  // };
  

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

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
  return (
    <div className="borrow-wrap dash-wrapper">
      <form onSubmit={handleSubmit}>
        <Borrow
          page={page}
          fullname={fullname}
          email={email}
          address={address}
          employmentType={employmentType}
          phoneNumber={phoneNumber}
          age={age}
          gender={gender}
          maritalStatus={maritalStatus}
          jobRole={jobRole}
          jobSector={jobSector}
          nationalIdentityNumber={nationalIdentityNumber}
          incomePerMonth={incomePerMonth}
          handleChange={handleChange}
        />

        <BorrowerLoanInfo
          page={page}
          loanAmount={loanAmount}
          loanType={loanType}
          repaymentType={repaymentType}
          purposeOfLoan={purposeOfLoan}
          handleChange={handleChange}
        />

        <DashCollaInfo
          page={page}
          collateralType={collateralType}
          collateralValue={collateralValue}
          collateralInformation={collateralInformation}
          handleChange={handleChange}
        />

        <DashGInfo
          page={page}
          fullname={guarantor.fullname}
          phoneNumber={guarantor.phoneNumber}
          email={guarantor.email}
          address={guarantor.address}
          socialSecurityNumber={guarantor.socialSecurityNumber}
          relationship={guarantor.relationship}
          incomePerMonth={guarantor.incomePerMonth}
          otherSourcesOfIncome={guarantor.otherSourcesOfIncome}
          age={guarantor.age}
          employmentType={guarantor.employmentType}
          handleChange={handleChange}
        />

        <FullBProfile
          page={page}
          handleNext={handleNext}
          formData={formData}
          ModalTwo={ModalTwo}
        />

        <div className="d-btn">
          <button
            onClick={handlePrev}
            style={
              page === 1 || page === "preview"
                ? { display: "none" }
                : { display: "inline" }
            }
            type="submit"
            className="l-btn"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="g-btn"
            style={
              page === "preview" ? { display: "none" } : { display: "inline" }
            }
          >
            {" "}
            {page === 4
              ? "Save Data"
              : page === "open"
              ? "Upload Data"
              : "Next"}{" "}
          </button>
          <Modal
            isOpen={ModalIsOpen}
            // onRequestClose={handleModalClose}
            style={customStyles}
          >
            <div className="bs-preview">
              <h6>Borower's data has been saved. Kindly preview data</h6>
              <div className="btn-btn">
                <div>
                  <button onClick={handleNext} className="btn-pre">Preview</button>
                </div>
                <div>
                  <button className="btn-cancel">Cancel</button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default BorrowerData;
