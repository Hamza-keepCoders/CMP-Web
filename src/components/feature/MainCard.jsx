import React from 'react';

const MainCard = (props) => {
  return (
    <div
      className="gradient-border card shadow-md bg-white px-[15px] py-[20px] flex flex-col gap-[8px]"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div className='border-content p-4'>
      <h1 className='text-[24px] font-semibold'>{props.title}</h1>
      <h5>{props.desc}</h5>
      </div>
    </div>
  );
};

export default MainCard;
