import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Modal from "react-modal";

const EligibilityStatus = () => {
  const [modalIsOpen, setModalisopen] = useState(false);
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
    <div>
      <div className="generated-flex dbContainer">
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
        <Link
          to="/dashboard/fullbprofile"
          style={{ textDecoration: "none", color: "#808080" }}
        >
          Borrower's data preview
        </Link>
        <p className="arrowimg">
          <MdKeyboardArrowRight />
        </p>
        <h5>Loan Eligibility Status</h5>
      </div>
      <div className="b-header eligible-wrap">
        <h2>Borrower's Loan Eligibilty Status</h2>
        <p className="b-head1">
          <i>This borrower is not eligible to loan type</i>
        </p>
        <p className="b-head1">
          <i>
            After thorough analysis by the system, it has been predicted that
            this borrower is likely to default loan. It is hereby advised to
            reject the loan application of this borrower
          </i>
        </p>
        <p className="b-head1">
          <span>Reason:</span>
          <i>
            This borrower has insufficient income and there is a fault in
            collateral data
          </i>
        </p>
        <p className="b-head1">
          <span>Financial advice:</span>
          <i>Application for a lower amount of loan is advised</i>
        </p>
      </div>
      <div className="can-btn eligible-wrap">
        <button
          type="submit"
          onClick={() => setModalisopen(true)}
          className="f-btn"
        >
          Cancel Loan Generation
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalisopen(false)}
          style={customStyles}
        >
          <div className="bs-preview">
            <p className="can-btnP">
              Loan Generation Process has been canceled
            </p>
            <Link to="/dashboard">
              <button>Back</button>
            </Link>
          </div>
        </Modal>
      </div>
      <Link
        to="/dashboard/statussender"
        style={{ textDecoration: "none", color: "#808080" }}
      >
        <button className="status-bor eligible-wrap">
          Send Eligibility Status to Borrower
        </button>
      </Link>
    </div>
  );
};

export default EligibilityStatus;
