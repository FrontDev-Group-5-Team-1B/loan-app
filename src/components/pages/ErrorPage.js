import React from 'react'
import Error from "../../assets/2696450 1.png"

const ErrorPage = () => {
  return (
    <div>
        <img src={Error} alt=""/>
        <p>We are sorry, the page you are looking for is not available.<br/> Perphaps you can try a new search.</p>
        <button>Go Back</button>
    </div>
  )
}

export default ErrorPage;