import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import useBorrowersDataStore from "../../store/borowersDataStore";

const DashGInfo = () => {
  const [ModalIsopen, setModalisopen] = useState(false);
  const { formData, setFormData } = useBorrowersDataStore();
  const { guarantor } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input field is for the guarantor object
    if (name.startsWith("guarantor.")) {
      const guarantorField = name.split(".")[1];
      let newValue;

      if (guarantorField === "incomePerMonth") {
        newValue = parseFloat(value);
      } else if (guarantorField === "age") {
        newValue = parseInt(value);
      } else {
        newValue = value;
      }

      setFormData({
        ...formData,
        guarantor: {
          ...guarantor,
          [guarantorField]: newValue,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
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
    <div className="borrow-wrap">
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrower's details</p>
      </div>
      <div className="bor-data">
        <h5>Guarantor's Information</h5>

        <form>
          <div className="b-data">
            <div className="b-data1">
              <div>
                <input
                  type="text"
                  placeholder="name"
                  className="placeholder"
                  name="guarantor.fullname"
                  value={guarantor.fullname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="placeholder"
                  name="guarantor.email"
                  value={guarantor.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="placeholder"
                  name="guarantor.address"
                  value={guarantor.address}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <select
                  name="guarantor.relationship"
                  onChange={handleInputChange}
                  value={guarantor.relationship}
                >
                  <option value="">Relationship</option>
                  <option value="Sister">Sister</option>
                  <option value="Brother">Brother</option>
                  <option value="Parent">Parent</option>
                  <option Value="Spouse">Spouse</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Other sources of Income"
                  className="placeholder"
                  name="guarantor.otherSourcesOfIncome"
                  value={guarantor.otherSourcesOfIncome}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="b-data2">
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="placeholder"
                  name="guarantor.phoneNumber"
                  value={guarantor.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Age"
                  className="placeholder"
                  name="guarantor.age"
                  value={guarantor.age}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Social Security Number"
                  className="placeholder"
                  name="guarantor.socialSecurityNumber"
                  value={guarantor.socialSecurityNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <select
                  name="guarantor.employmentType"
                  onChange={handleInputChange}
                  value={guarantor.employmentType}
                >
                  <option value="">Employment Type</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Unemployed">Umemployed</option>
                  <option value="Contract">Contact</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Income per month"
                  className="placeholder"
                  name="guarantor.incomePerMonth"
                  value={guarantor.incomePerMonth}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="car-dot">
            <p>
              <RxDotFilled size="25px" />
            </p>
            <p>
              <RxDotFilled size="25px" />
            </p>
            <p>
              <RxDotFilled size="25px" />
            </p>

            {/* <Link
              to="/dashboard/collateral_info"
              style={{ textDecoration: "none" }}
            >
             
            </Link> */}
            <p className="p1">
              <RxDotFilled size="25px" />
            </p>
          </div>
        </form>
      </div>
      <div className="d-btn">
        <button className="l-btn">
          <Link
            to="/dashboard/collateral_info"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Previous
          </Link>
        </button>

        <button
          style={{ cursor: "pointer", fontSize: "1.5rem", width: "140px" }}
          type="submit"
          onClick={() => setModalisopen(true)}
          className="g-btn"
        >
          Save Data
        </button>
        <Modal
          isOpen={ModalIsopen}
          onRequestClose={() => setModalisopen(false)}
          style={customStyles}
        >
          <div className="bs-preview">
            <h6>Borower's data has been saved. Kindly preview data</h6>
            <div className="btn-btn">
              <div>
                <button style={{ fontSize: "18px" }}>
                  <Link
                    to="/dashboard/fullbprofile"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Preview
                  </Link>
                </button>
              </div>
              <div>
                <button
                  onClick={handleClick}
                  style={{
                    color: "red",
                    background: "none",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DashGInfo;
