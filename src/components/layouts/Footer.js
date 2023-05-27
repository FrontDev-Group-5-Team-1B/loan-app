import React from "react";
import logo2 from "../../assets/Loan logo 2.png";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

// styles
import "../../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-content-1">
              <h3>Join Our Newsletter</h3>
              <p className="footer-text">
                Subscribe to join our newsletter, where you get weekly emails
                from our teams
              </p>
          <div className="subscribe">
          <form>
            <input className="form-field" type="text" name="email" id="email" placeholder="enter your email address"/>
            <button type="subscribe" className="btn-1">Subscribe</button>
          </form>
          </div>
          </div>

          <div className="footer-links">
            <div className="header-img ">
              <NavLink to="/"><img src={logo2} alt="app-logo" className="footer-img"/></NavLink>
            </div>

            <div className="footer">
              <div className="white-radius"></div>
              <ul>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">No Debt</a>
              </li>
              <li>
                <a href="#">Loan</a>
              </li>
              <li>
                <a href="#">Loan default</a>
              </li>
              </ul>
            </div>

            <div className="footer">
              <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">FAQS</a></li>
              <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer">
              <ul>
             <li><a href="#">Legal</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Security</a></li>
              </ul>
            </div>
            </div>
            <div className="footer-last-text">
          <p>
            No debt unlock the potential of predictive modelng and credit risk
            management to optimize your loan portfolio and drives businesses
            growth
          </p>
          <p className="copyright">2020-2023 no Debt Global Limited - RC 1222200</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Footer;
