import React from 'react';

const FeaturesCard = (props) => {
  return (
    <div className='card flex lg:flex-row flex-col items-start gap-5 border-2 rounded-[20px] py-6 px-4 bg-white transition-all hover:bg-[#C3E11D]'>
      <img className='object-contain' src={props.img} alt="" />
      <div className='flex flex-col justify-center'>
        <h2 className='text-[#00316E] font-semibold text-lg lg:text-xl'>{props.title}</h2>
        <h5 className='text-sm mt-2'>{props.desc}</h5>
        <button className='flex items-center gap-1 font-semibold text-sm text-[#00316E] mt-3'>
          Learn more <i className='fa fa-arrow-right text-xs text-[#00316F]'></i>
        </button>
      </div>
    </div>
  );
};

export default FeaturesCard;
