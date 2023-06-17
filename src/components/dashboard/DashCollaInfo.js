import React from "react";
import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";

const DashCollaInfo = ({
  collateralType,
  collateralValue,
  collateralInformation,
  handleChange,
  page,
}) => {
  return (
    <div
      style={
        page === 3 || page === "open"
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
        <h5>Collateral Information</h5>
        
          <div className="loan-info-flex">
            <div>
              <select
                name="collateralType"
                value={collateralType}
                onChange={handleChange}
              >
                <option>Collateral Type</option>
                <option>Real Estate</option>
                <option>Business Equipment</option>
                <option>Inventory</option>
                <option>Invoices</option>
                <option>Cash</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                name="collateralValue"
                value={collateralValue}
                onChange={handleChange}
                placeholder="Collateral Value"
                className="placeholder"
              />
            </div>
          </div>

          <textarea
            type="text"
            name="collateralInformation"
            value={collateralInformation}
            onChange={handleChange}
            placeholder="Provide Collateral information e.g location, car model, mileage e.t.c"
          />
          <div className='car-dot'>
          <p><RxDotFilled size="25px" /></p>
         {/* <Link to='/dashboard/borrow' style={{ textDecoration: "none"}}> <p><RxDotFilled/></p></Link> */}
         <p><RxDotFilled size="25px" /></p>
          <p className='p1'><RxDotFilled size="25px" /></p>
         {/* <Link to='/dashboard/guarantor_info' style={{ textDecoration: "none"}}> </Link> */}
         <p><RxDotFilled size="25px" /></p>
        </div>
        
      </div>
      {/* <div className='d-btn'>
     <button className='l-btn'><Link to='/dashboard/borrowerloan_info' style={{ textDecoration: "none", color: "blue" }}>Previous</Link></button>
     <button className='b-btn'><Link to='/dashboard/guarantor_info' style={{ textDecoration: "none", color: "white" }}>Next</Link> </button>

 </div> */}
    </div>
  );
};

export default DashCollaInfo;
