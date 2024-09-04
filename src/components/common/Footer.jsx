import React from 'react';
import { footerLogo } from '../../assets';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div>
          <div>
            <img className='footer-logo' src={footerLogo} alt="Change.ai Logo" />
            <h2 className='footer-title'>Change.ai</h2>
          </div>
          <div className='footer-sections'>
            <ul className='footer-section'>
              <li className='footer-section-title'>Product</li>
              <a href="">Login</a>
              <a href="">Pricing</a>
              <a href="">Copy AI Reviews</a>
              <a href="">Free AI Tools</a>
              <a href="">GPL licenses</a>
            </ul>
            <ul className='footer-section'>
              <li className='footer-section-title'>Company</li>
              <a href="">Blog</a>
              <a href="">Careers</a>
              <a href="">Community</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
              <a href="">Affiliate Program</a>
            </ul>
            <ul className='footer-section'>
              <li className='footer-section-title'>Support</li>
              <a href="">Weekly Demos</a>
              <a href="">Report a Bug</a>
              <a href="">Report an Outage</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </ul>
            <ul className='footer-section'>
              <li className='footer-section-title'>Contact Us</li>
              <a href="">+45 987 164 681</a>
              <a href="">support@changeai.com</a>
              <a href="">12th Ave, Main St, LA</a>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-bottom-links'>
            <a href="#">© 2024 Change.ai, Inc</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className='footer-socials'>
            <a href="#" className='text-xl md:text-2xl'><i className='fa-brands fa-facebook'></i></a>
            <a href="#" className='text-xl md:text-2xl'><i className='fa-brands fa-instagram'></i></a>
            <a href="#" className='text-xl md:text-2xl'><i className='fa-brands fa-twitter'></i></a>
          </div>
        </div>
      </div>
      <style>
        {`
        .footer-container {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}
.footer-logo {
  background-color: #C3E11D;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.footer-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.footer-sections {
  display: grid;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

@media screen and (min-width:460px){
.footer-sections {
  grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width:786px){
.footer-sections {
  grid-template-columns: repeat(4, 1fr);
  }
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: medium;
}

.footer-section-title {
  font-size: 1.125rem;
  font-weight: semibold;
  margin-bottom: 0.75rem;
  list-style: none;
}

.footer-section a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-top: 2px solid #ddd;
}

.footer-bottom-links {
  display: flex;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: medium;
}

.footer-bottom-links a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-bottom-links a:hover {
  text-decoration: underline;
}

.footer-socials {
  display: flex;
  gap: 0.75rem;
}

.footer-socials a {
  font-size: 1.25rem;
  transition: color 0.2s ease;
}

.footer-socials a:hover {
  color: #000;
}

        `}
      </style>
    </div>
  );
};

export default Footer;
