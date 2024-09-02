import React from 'react';
import { faqsLogo } from '../../../assets';
import Accordian from '../../feature/Accordian'; // Adjust import path if necessary

const accordianData = [
    {
        title: 'Is there a free trial available?',
        desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        count: 1,
    },
    {
        title: 'Can I change my plan later?',
        desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        count: 2,
    },
    {
        title: 'How does support work?',
        desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        count: 3,
    },
    {
        title: 'Do you provide tutorials?',
        desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        count: 4,
    },
    {
        title: 'What is your cancellation policy?',
        desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        count: 5,
    },
    {
        title: 'How do I change my account email?',
        desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        count: 6,
    },
    {
        title: 'How does billing work?',
        desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        count: 7,
    },
    {
        title: 'Can other info be added to an invoice?',
        desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        count: 8,
    },
];

const FAQs = () => {
  return (
    <div className='mt-20 mb-20'>
      <div className='flex flex-col items-center text-center text-[40px] font-[600]'>
        <img src={faqsLogo} alt="" />
        <h2>Frequently Asked Questions.</h2>
      </div>
      <div className='md:w-[70%] mx-auto mt-20'>
        {accordianData.map((item) => (
          <Accordian key={item.count} title={item.title} desc={item.desc} count={item.count} />
        ))}
      </div>
      <div className='flex flex-col justify-center items-center text-center font-[600] mt-10'>
      <h1 className='text-[40px]'>Need Personal Assistance?</h1>
      <h5 className='text-[12px] font-[300] my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.</h5>
      <button className='bg-[#B4FF00] rounded-full py-[10px] px-[53px] text-[20px] font-[500]'>Contact Us</button>
    </div>
    </div>
  );
}

export default FAQs;
