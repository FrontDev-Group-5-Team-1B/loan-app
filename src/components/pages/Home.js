import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import "../../styles/home.css"

// Services images
import image1 from "../../assets/3266883 1.png";
import image2 from "../../assets/3670773 1.png";
import image3 from "../../assets/13068 1.png";

//review images
import pexel2 from "../../assets/pexels-hannah-nelson-1065084 1-1.png"
import pexel3 from "../../assets/pexels-hannah-nelson-1065084 1-2.png"
import pexel4 from "../../assets/pexels-hannah-nelson-1065084 1-3.png"
import pexel5 from "../../assets/pexels-hannah-nelson-1065084 1-4.png"
import pexel1 from "../../assets/pexels-hannah-nelson-1065084 1.png"

// Sponsors
import flutter from "../../assets/flutterwaves.png"
import guardian from "../../assets/theguardian.png"
import paystack from "../../assets/Paystack.png"

// Social icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiArrowSmRight } from "react-icons/hi";
import {SiApple} from "react-icons/si"
import {SiGoogleplay} from "react-icons/si"

// imported components files
import Footer from "../layouts/Footer";
import ImageSlider from "../layouts/ImageSlider";

const Home = () => {
  return (
    <>
      <section className="container row hero-page">
        <div className="hero-content row">
          <div className="hero-title">
            <h1>
              Experience the power of predictive analytics with our loan
              prediction software - No Debt
            </h1>
            <p>
              Get ready to explore our range of loan products and find the one
              tha's right for your client.
            </p>
          </div>
          <button className="hero-btn">
            Get Started
            <HiArrowSmRight />
          </button>
        </div>
        <ImageSlider/>
      </section>

      <main>
        <section className="services" id="services">
          <div className="services-container">
          <div className="content"><h2>Our Services</h2></div>
            <div className="services-content">
              <span>1</span>
              <div className="text">
                <p>
                  Help reduce the rate of loan default by using advanced
                  algorithms to analyze the borrowers data and giving
                  predictions of default possibilites.
                </p>
                </div>
              <div className="image">
                <img src={image1} alt="services-image" />
              </div>
              </div>

             <div className="services-content">
              <span>2</span>
              <div className="image">
                <img src={image2} alt="services-image" />
              </div>
              <div className="text">
                <p>
                  Borrowers with financial difficulties will be flagged up
                  sooner rather than later. So, you can address issues before
                  they arise - and before a customer defaults. This is proactive
                  credit risk management
                </p>
              </div>
            </div>

            <div className="services-content">
              <span>3</span>
              <div className="text">
                <p>
                  The prediction model helps the bank by minimizing the risk and
                  reducing the number of defaulters.
                </p>
              </div>
              <div className="image">
                <img src={image3} alt="services-images" />
              </div>
            </div>
          </div>
        </section>

        <section className="review">
          <div className="review-container">
            <div className="review-content">
              <div className="review-subcontent">
                <img src={pexel1} className="user-img"/>
                  <span className="reviewer">Amaka Grace</span>
                  <span className="time">Tuesday 20 August 2023 by 12PM</span>
                </div>
                <p className="review">
                  I was able to monitor a loan given out to my borrowers this year.
                  Thanks to No debt.
                </p>
            </div>
            
            <div className="review-content">
            <div className="review-subcontent">
                <img src={pexel2} className="user-img"/>
                  <span className="reviewer">Matthew Luke</span>
                  <span className="time">Wednesday 24 March 2023 by 2AM</span>
                  </div>
                <p className="review">
                 Thanks to No debt, I could predict loan defaulting from most of my company borrowers.
                </p>
                </div>

                <div className="review-content">
                <div className="review-subcontent">
                <img src={pexel3} className="user-img"/>
                  <span className="reviewer">Tazan Fred</span>
                  <span className="time">Monday 01 June 2023 by 4AM</span>
              </div>
                <p className="review">
                  I was able to monitor a loan given out to my borrowers this year.
                  Thanks to No debt.
                </p>
                </div>

                <div className="review-content">
                <div className="review-subcontent">
                <img src={pexel4} className="user-img"/>
                  <span className="reviewer">Becky Tunde</span>
                  <span className="time">Friday 01 Feburary 2023 by 1PM</span>
              </div>
                <p className="review">
                  I could not lose my job because I was able to detect a loan defaulter earlier and faster
                </p>
                </div>

                <div className="review-content">
                <div className="review-subcontent">
                <img src={pexel5} className="user-img"/>
                  <span className="reviewer">Scott Man</span>
                  <span className="time">Friday 01 Feburary 2023 by 1PM</span>
              </div>
                <p className="review">
                  I was able to monitor my borrowers debt and avoid default from them.
                </p>
                </div>
          </div>

          <div className="media">
            <div className="media-content">
            <h3>3 Million + customers</h3>
            <p>Since it's launch in 2020, more than 4,000,000 individuals have utilized No Debt to forecast laon outcomes and facilitate loan disbursement. This software has effeciently mitigated the elevated risk associated with lending by providing relaible predictions and enabling responsible loan allocation.</p>
            <NavLink to="/signup">
             <button>Create free account</button>
            </NavLink>
            <div className="btn">
            <div className="">
              <button><SiApple/>Get on iPhone</button>
            </div>
            <div className="">
              <button><SiGoogleplay fill="blue"/>Get on Andriod</button>
            </div>
            </div>

            <div className="sponsors">
              <div><img src={flutter} alt="sponsors-image"/></div>
              <div><img src={guardian} alt="sponsors-image"/></div>
              <div><img src={paystack} alt="sponsors-image"/></div>
            </div>

            <div className="social-icons">
              <NavLink to="/">
                <TiSocialFacebookCircular  fill="#0267FF" size="40px"/>
              </NavLink>
              <NavLink to="/">
                <TiSocialTwitter fill="#0267FF" size="40px"/>
              </NavLink>
              <NavLink to="/">
                <TiSocialLinkedin  fill="#0267FF" size="40px"/>
              </NavLink>
            </div>
            <p className="address">
              Badmus house, Tijaniki Upkpene Close, Victoria Island, Lagos,
              Nigeria.
            </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
