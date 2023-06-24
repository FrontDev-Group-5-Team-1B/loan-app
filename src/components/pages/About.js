import React from 'react'
import Footer from '../layouts/Footer'
import { RxDotFilled } from 'react-icons/rx'

const About = () => {
  return (
    <>
    <div className='aboutContain'>
    <h3 className='topic'>About Us</h3>
        <div className='missionA'>
            <h4>Our Mission</h4>
            <p>Our mission is to develop an innovative loan prediction design that leverages on advanced data analytics to accurately accessing credit worthiness of loan applicants. By Providing reliable predictions, to reduce risk of default and promoting financial inclusivity.</p>
        </div>

        <div className='visionA'>
            <h4>Our Vision</h4>
            <p>The loan prediction app aims to develop a robust and accurate system that can 
            predict the likelihood of loan approval for applicants based on various factors
            and historical data. Our vision is to provide financial institutions with a reliable
            tool for accessing loan applications, reducing manual effort and improving 
            decision  making accuracy which leads to customer satisfaction.
</p>
        </div>

        <div className='coreValues'>
            <h4>Our Core Values</h4>
            <ul>
                <li><RxDotFilled size="25px"/>Accuracy</li>
                <li><RxDotFilled size="25px"/>Fairness</li>
                <li><RxDotFilled size="25px"/>Privacy and Security</li>
                <li><RxDotFilled size="25px"/>Accountability</li>
                <li><RxDotFilled size="25px"/>Continuous Improvement</li>
            </ul>
        </div>
        </div>

    <Footer/>
    </>
  )
}

export default About