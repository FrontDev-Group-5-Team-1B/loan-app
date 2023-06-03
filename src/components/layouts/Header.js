import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Loan logo 1.png";
import { FaBars, FaTimes } from "react-icons/fa";

// styles
import "../../styles/header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  

  return (
    <>
      <nav className="header">
        <div className="header-img">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About Us</NavLink>
          <a href="/#services">Services</a>
          <NavLink to="contact">Contact</NavLink>
        </div>
        <div className="btn">
          <NavLink to="login">Log In</NavLink>
          <NavLink to="signup" className="signup">
            Sign Up
          </NavLink>
        </div>
        <button className="mobile-menu-icons" onClick={toggleMobileMenu}>
             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
           </button>
      </nav>
      <nav className="header-second">
      <div className="btn-second">
          <NavLink to="login">Log In</NavLink>
          <NavLink to="signup" className="signup">
            Sign Up
          </NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import logo from "../../assets/Loan logo 1.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// // styles
// import "../../styles/header.css";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <nav className="header">
//         <div className="header-img">
//           <NavLink to="/">
//             <img src={logo} alt="logo" />
//           </NavLink>
//         </div>
//         <div className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
//           <div className="navbar-toggle" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//           <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="about">About Us</NavLink>
//             </li>
//             <li>
//               <a href="/#services">Services</a>
//             </li>
//             <li>
//               <NavLink to="contact">Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//         <div className="btn">
//           <NavLink to="login">Log In</NavLink>
//           <NavLink to="signup" className="signup">
//             Sign Up
//           </NavLink>
//         </div>
//       </nav>

//       <Outlet />
//     </>
//   );
// };

// export default Header;
