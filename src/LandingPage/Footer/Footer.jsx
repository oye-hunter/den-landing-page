import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="lp-footer">
      <div className="footer-den-info">
        <img src={require("../../Assets/den black 1.png")} alt="" />
        <p>
          Digital Empowerment Network is commited to work by designing
          indigenious interventions.
        </p>
      </div>
      <div className="footer-links">
        <h5>Links</h5>
        <a href="/">Home</a>
        <a href="/">Courses</a>
        <a href="/">Internship</a>
        <a href="/">Team</a>
        <a href="/">Offers</a>
        <a href="/">Our Gallery</a>
      </div>
      <div className="footer-company">
        <h5>Company</h5>
        <a href="/">About Us</a>
        <a href="/">Contact us</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms and Conditions</a>
        <a href="/">Business Management</a>
      </div>
      <div className="footer-follow-us">
        <h5>Follow Us</h5>
        <div className="footer-follow-us-logos">
          <a href="/">
            <img src={require("../../Assets/facebook.png")} alt="" />
          </a>
          <a href="/">
            <img src={require("../../Assets/instagram.png")} alt="" />
          </a>
          <a href="/">
            <img src={require("../../Assets/linkedin.png")} alt="" />
          </a>
          <a href="/">
            <img src={require("../../Assets/youtube.png")} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
