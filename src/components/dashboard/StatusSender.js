import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import google from "../../assets/logos_google-icon.png";
import { useSendEmail } from "../../services/query/query.service";
import { toast } from "react-toastify";

const StatusSender = () => {
  const status = localStorage.getItem("borrowerEligibility");
  console.log(status);
  const sendEmail = useSendEmail();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmailInfo = async () => {
    try {
      await sendEmail.mutateAsync();
      setIsEmailSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const notify = () => toast("Successful");

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
        <Link
          to={
            status
              ? "/dashboard/eligibilitystatus_success"
              : "/dashboard/eligibilitystatus"
          }
          style={{ textDecoration: "none", color: "#808080" }}
        >
          Loan Eligibility Status
        </Link>
        <p className="arrowimg">
          <MdKeyboardArrowRight />
        </p>
        <h5>Send Message</h5>
      </div>

      <div className="b-header eligible-wrap">
        <h2>Send Loan Eligibility Status To Borrower</h2>
        <p className="b-head1">
          <i>
            Choose to send the eligibility status and financial advice to
            borrower via email or text message
          </i>
        </p>
      </div>
      <div className="m-btn">
        <button onClick={sendEmailInfo} className="mb-btn eligible-wrap">
          {" "}
          {sendEmail.isLoading ? "Sending..." : "Send via Gmail"}{" "}
          <span>
            {" "}
            <FaEnvelope />
          </span>
        </button>
        {sendEmail.isError && (
          <div style={{ color: "red" }}>Error sending email</div>
        )}
        {isEmailSent && toast("Email successfully sent")}
        {/* <button className="mb-btn">
          Send via Text Message
          <span>
            <img src={google} alt="google" style={{ width: "12px" }} />
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default StatusSender;
