import React from 'react'
import Footer from '../layouts/Footer'

const About = () => {
  return (
    <>
    <div className='aboutContain'>
    <h3 className='topic'>About Us</h3>
    <div>
        <div className='missionA'>
            <h4>Our Mission</h4>
            <p>Our mission is to develop an innovative loan prediction design that leverages on advanced data analytics to accurately accessing credit worthiness of loan applicants. By Providing reliable predictions, to reduce risk of default and promoting financial inclusivity.</p>
        </div>

    </div>
    <div>
        <div className='visionA'>
            <h5>Our Vision</h5>
            <p>The loan prediction app aims to develop a robust and accurate system that can 
            predict the likelihood of loan approval for applicants based on various factors
            and historical data. Our vision is to provide financial institutions with a reliable
            tool for accessing loan applications, reducing manual effort and improving 
            decision  making accuracy which leads to customer satisfaction.
</p>
        </div>
        </div>
        <div>
        <div className='coreValues'>
            <h6>Our Core Values</h6>
            <ul>
                <li>Accuracy</li>
                <li>Fairness</li>
                <li>Privacy and Security</li>
                <li>Accountability</li>
                <li>Continuous Improvement</li>
            </ul>
        </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default About