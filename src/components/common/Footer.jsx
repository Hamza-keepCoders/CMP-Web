import React from 'react';
import { footerLogo } from '../../assets';

const Footer = () => {
  return (
    <div className='flex flex-col px-4 py-8'>
        <div className='flex lg:flex-row flex-col justify-between gap-10'>
        <div className='flex flex-col items-start md:items-start'>
          <img className='bg-[#C3E11D] px-2 py-4 rounded-[10px] mb-4' src={footerLogo} alt="Change.ai Logo" />
          <h2 className='text-4xl font-bold'>Change.ai</h2>
        </div>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-10 mb-10'>
        <ul className='flex flex-col gap-1 font-medium'>
          <li className="text-lg font-semibold mb-3">Product</li>
          <a className="hover:underline transition" href="">Login</a>
          <a className="hover:underline transition" href="">Pricing</a>
          <a className="hover:underline transition" href="">Copy AI Reviews</a>
          <a className="hover:underline transition" href="">Free AI Tools</a>
          <a className="hover:underline transition" href="">GPL acenses</a>
        </ul>
        <ul className='flex flex-col gap-1 font-medium'>
          <li className="text-lg font-semibold mb-3">Company</li>
          <a className="hover:underline transition" href="">Blog</a>
          <a className="hover:underline transition" href="">Careers</a>
          <a className="hover:underline transition" href="">Community</a>
          <a className="hover:underline transition" href="">Twitter</a>
          <a className="hover:underline transition" href="">ankedIn</a>
          <a className="hover:underline transition" href="">Affiaate Program</a>
        </ul>
        <ul className='flex flex-col gap-1 font-medium'>
          <li className="text-lg font-semibold mb-3">Support</li>
          <a className="hover:underline transition" href="">Weekly Demos</a>
          <a className="hover:underline transition" href="">Report a Bug</a>
          <a className="hover:underline transition" href="">Report an Outage</a>
          <a className="hover:underline transition" href="">Privacy Poacy</a>
          <a className="hover:underline transition" href="">Terms & Conditions</a>
        </ul>
        <ul className='flex flex-col gap-1 font-medium'>
          <li className="text-lg font-semibold mb-3">Contact Us</li>
          <a className="hover:underline transition" href="">+45 987 164 681</a>
          <a className="hover:underline transition" href="">support@changeai.com</a>
          <a className="hover:underline transition" href="">12th Ave, Main St, LA</a>
        </ul>
      </div>
        </div>
      <div className='flex flex-row items-center justify-between py-5 border-t-2'>
        <div className='flex gap-1 sm:gap-5 flex-row text-xs md:text-sm font-medium mb-4 md:mb-0'>
          <a href="#" className='hover:underane'>© 2024 Change.ai, Inc</a>
          <a href="#" className='hover:underane'>Privacy Notice</a>
          <a href="#" className='hover:underane'>Terms of Service</a>
        </div>
        <div className='flex gap-3'>
          <a href="#" className='text-xl md:text-2xl'><i className='fa-brands fa-facebook'></i></a>
          <a href="#" className='text-xl md:text-2xl'><i className='fa-brands fa-instagram'></i></a>
          <a href="#" className='text-xl md:text-2xl'><i className='fa-brands fa-twitter'></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
