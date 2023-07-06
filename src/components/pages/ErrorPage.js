import React from 'react'
import Error from "../../assets/2696450 1.png";
import "../../styles/errorPage.css"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page-container">
        <img src={Error} alt="error-page"/>
        <p>We are sorry, the page you are looking for is not available.<br/> Perphaps you can try a new search.</p>
        <Link to="/"><button>Go Back</button></Link>
    </div>
  )
}

export default ErrorPage;