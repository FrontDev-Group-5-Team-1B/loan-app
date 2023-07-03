import React from 'react'
import Footer from '../layouts/Footer'
import { RxDotFilled } from 'react-icons/rx'
import dammy from '../../assets/dammy.jpg'
import chiamaka from '../../assets/chiamaka.jpg'
import anuli from '../../assets/anuli.jpg'
import perpetual from '../../assets/perpetua.jpg'
import elijah from '../../assets/elijah.jpg'
import rachel from '../../assets/rachel.jpg'
import onyinye from '../../assets/onyinye.jpg'

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

        <div className='meetUs'>
            <h4>Meet Our Developers</h4>
            <div className='team'>
                <div className='developer'>
                    <div>
                        <img src={dammy} alt='dammy'/>
                    </div>
                    <div className='title'>
                        <h3 className='devName'>Blessing Dawodu</h3>
                        <h5 className='devTitle'>Frontend Developer</h5>
                    </div>
                </div>
                <div className='developer'>
                    <div>
                        <img src={rachel} alt='chiamaka'/>
                    </div>
                    <div className='title'>
                        <h3 className='devName'>Rachel Opuba</h3>
                        <h5 className='devTitle'>Frontend Developer</h5>
                    </div>
                </div>

                <div className='developer'>
                    <div>
                        <img src={anuli} alt='chiamaka'/>
                    </div>
                    <div className='title'>
                        <h3 className='devName'>Anulika Nnedu</h3>
                        <h5 className='devTitle'>Frontend Developer</h5>
                    </div>
                </div>

                <div className='developer'>
                    <div>
                        <img src={chiamaka} alt='chiamaka'/>
                    </div>
                    <div className='title'>
                        <h3 className='devName'>Chiamaka Onyia</h3>
                        <h5 className='devTitle'>Frontend Developer</h5>
                    </div>
                </div>

                <div className='developer'>
                    <div>
                        <img src={onyinye} alt='onyinye'/>
                    </div>
                    <div className='title'>
                        <h3 className='devName'>Onyinye Chukwumee</h3>
                        <h5 className='devTitle'>FRONTEND DEVELOPER</h5>
                    </div>
                </div>

                <div className='developer'>
                    <div>
                        <img src={perpetual} alt='chiamaka'/>
                    </div>
                    <div className='title'>
                        <h3 className='devName'>Perpetual Meninwa</h3>
                        <h5 className='devTitle'>Backend Developer</h5>
                    </div>
                </div>

                <div className='developer'>
                    <div>
                        <img src={elijah} alt='chiamaka'/>
                    </div>
                    <div className='title'>
                        <h3 className='devName'>Elijah Vande</h3>
                        <h5 className='devTitle'>Data Scientist</h5>
                    </div>
                </div>
               
            </div>
        </div>
     </div>

    <Footer/>
    </>
  )
}

export default About