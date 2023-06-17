import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";

const DashGInfo = ({
  fullname,
  phoneNumber,
  email,
  address,
  socialSecurityNumber,
  relationship,
  incomePerMonth,
  otherSourcesOfIncome,
  age,
  employmentType,
  handleChange,
  page,
}) => {
  const [ModalIsopen, setModalisopen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //     padding: '50px'
  //   },
  // };
  return (
    <div
      style={
        page === 4 || page === "modal"
          ? { display: "block" }
          : { display: "none" }
      }
      className="borrow-wrap"
    >
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrower's details</p>
      </div>
      <div className="bor-data">
        <h5>Guarantor's Information</h5>
        
          <div className="b-data">
            <div className="b-data1">
              <div>
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="socialSecurityNumber"
                  value={socialSecurityNumber}
                  onChange={handleChange}
                  placeholder="Social Security Number"
                  className="placeholder"
                />
              </div>
            </div>
            <div className="b-data2">
              <div>
                <input
                  type="text"
                  name="relationship"
                  value={relationship}
                  onChange={handleChange}
                  placeholder="Relationship"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="incomePerMonth"
                  value={incomePerMonth}
                  onChange={handleChange}
                  placeholder="Income Per Month"
                  className="placeholder"
                />
              </div>
             <div>
                <input
                  type="text"
                  name="otherSourcesOfIncome"
                  value={otherSourcesOfIncome}
                  onChange={handleChange}
                  placeholder="Other Sources Of Income"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="age"
                  value={age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="guarantor.employmentType"
                  value={employmentType}
                  onChange={handleChange}
                  placeholder="Employment Type"
                  className="placeholder"
                />
              </div>
            </div>
          </div>
          <div className='car-dot'>
      <p><RxDotFilled size="25px"/></p>
      <p><RxDotFilled size="25px" /></p>
      {/* <Link to='/dashboard/collateral_info' style={{ textDecoration: "none" }}></Link> */}
      <p><RxDotFilled size="25px" /></p>
      <p className='p1'><RxDotFilled size="25px" /></p>
    </div>
        
      </div>
      {/* <div className='d-btn'> */}
      {/* <button className='l-btn'><Link to='/dashboard/collateral_info' style={{ textDecoration: "none", color: "blue" }}>Previous</Link></button> */}

      {/* <button  type='submit'onClick={() => setModalisopen(true)} className='g-btn'>Save Data</button> */}
      {/* <Modal isOpen={ModalIsopen} onRequestClose={() => setModalisopen(false)}  style={customStyles}> */}

      {/* <div className='bs-preview'> */}
      {/* <h6>Borower's data has been saved. Kindly preview data</h6> */}
      {/* <div className='btn-btn'>
        <div><button><Link to='/dashboard/fullbprofile' style={{ textDecoration: "none", color: 'white'}}>Preview</Link></button></div>
        <div><button  onClick={handleClick}>Cancel</button></div>
        </div> */}
      {/* </div> */}
      {/* </Modal>  */}
      {/* </div> */}
    </div>
  );
};

export default DashGInfo;
