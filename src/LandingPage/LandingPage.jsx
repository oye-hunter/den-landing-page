import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import './LandingPage.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const LandingPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="gap"></div>
      <div className="lp-hero-section">
        <div className="lp-hero-section-text">
          <h1>Empowering Students of Pakistan</h1>
          <p>
            Digital Empowerment Network is committed to work by designing
            indigenous interventions and working in collaboration with
            different public and private institutions for students’ greater
            development.
          </p>
          <div className="lp-hero-buttons">
            <a href="/" className="lp-hero-button2">Apply Now</a>
            <a href="/" className="lp-hero-button1">Learn More</a>
          </div>
          <div className="lp-hero-enrollment">
        <img src={require('../Assets/hero-pic.png')} alt="" />
        <p>5k+ Enrollments</p>
      </div>
        </div>
        <div className="lp-hero-section-image">
          <img
            className="lp-hero-section-image"
            src={require('../Assets/hero section images.png')}
            alt=""
          />
        </div>
      </div>
      
      <div className="lp-gray-strip">
        <img src={require('../Assets/gray-strip-logo1.png')} alt="" />
        <img src={require('../Assets/gray-strip-logo2.png')} alt="" />
        <img src={require('../Assets/gray-strip-logo3.png')} alt="" />
        <img src={require('../Assets/gray-strip-logo4.png')} alt="" />
        <img src={require('../Assets/gray-strip-logo5.png')} alt="" />
        <img src={require('../Assets/gray-strip-logo6.png')} alt="" />
      </div>
      <div className="lp-why-den-section">
        <h3>Why Choose DEN</h3>
        <p>
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking
        </p>
        <div className="lp-why-den-section-main-container">
          <div className="lp-why-den-section-container">
            <img src={require('../Assets/profile-icon.png')} alt="" />
            <h4>One on One Monitor</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laudantium voluptas.
            </p>
          </div>

          <div className="lp-why-den-section-container">
            <img src={require('../Assets/watch-icon.png')} alt="" />
            <h4>24/7 Mentor</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laudantium voluptas.
            </p>
          </div>

          <div className="lp-why-den-section-container">
            <img src={require('../Assets/grad-hat-icon.png')} alt="" />
            <h4>Alumni</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laudantium voluptas.
            </p>
          </div>

          <div className="lp-why-den-section-container">
            <img src={require('../Assets/heart-icon.png')} alt="" />
            <h4>Annual Experts</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laudantium voluptas.
            </p>
          </div>
        </div>
        <div className="lp-challenges-section">
          <img src={require('../Assets/challenges-pic.png')} alt="" />
          <div className="lp-challenges-section-text">
            <h3>Challenges in Achieving Digital Empowerment</h3>
            <p>
              Digital empowerment, the process of enabling individuals and
              communities to access and effectively use digital technologies,
              presents several challenges that can vary based on factors like
              geographical location, socioeconomic status, and access to
              resources.
            </p>
            <a href="/" className="lp-challenges-section-button">Learn More</a>
          </div>
        </div>
      </div>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className="lp-blue-countup-section">
            <div className="lp-blue-countup-section-element">
              {counterOn && <p className='countup'><CountUp start={0} end={8200} duration={2} />+</p>}
              <p>Success Stories</p>
            </div>
            <div className="lp-blue-countup-section-seperator"/>
            <div className="lp-blue-countup-section-element">
              {counterOn && <p className='countup'><CountUp start={0} end={12200} duration={2} />+</p>}
              <p>Expert Mentors</p>
            </div>
            <div className="lp-blue-countup-section-seperator"/>
            <div className="lp-blue-countup-section-element">
              {counterOn && <p className='countup'><CountUp start={0} end={2500} duration={2} />+</p>}
              <p>Hours Course</p>
            </div>
            <div className="lp-blue-countup-section-seperator"/>
            <div className="lp-blue-countup-section-element">
              {counterOn && <p className='countup'><CountUp start={0} end={3000} duration={2} />+</p>}
              <p>Active Students</p>
            </div>
          </div>
        </ScrollTrigger>
    </div>
  );
};

export default LandingPage;
