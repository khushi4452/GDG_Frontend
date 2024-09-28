import React from 'react';
import './Styles/Footer.css';
import logo from './../assets/navlogo.png';
import footerDecoration from './../assets/FrameImg.png';
import linkedinIcon from './../assets/linkedin-icon.png'; 
import instagramIcon from './../assets/instagramIcon.png';
import TwitterIcon from './../assets/TwitterIcon.png';
import emailIcon from './../assets/emaiIconl.png'; 
import locationIcon from './../assets/location.png'; 

const Footer = () => {
  return (
    <div>

      <div className="footer-line"></div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="Google Developer Groups Logo" />
              <h2>Google Developer Groups</h2>
              <p>On Campus • Ramdeobaba University</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-address">
              <p>
                <img src={locationIcon} alt="Location" className="footer-icon" /> 
                Shri Ramdeobaba College of Engineering and Management,<br />
                Ramdeo Tekdi, Gittikhadan, Katol Road Nagpur - 440013
              </p>
              <p>
                <img src={emailIcon} alt="Email" className="footer-icon" /> 
                <a href="mailto:dsc.rknec@gmail.com">gdg.rknec@gmail.com</a>
              </p>
            </div>
            <div className="footer-social">
              <p>Follow Us:</p>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-decoration">
          <img src={footerDecoration} alt="Footer Decoration" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
