import React, { useState } from 'react';
import { MainCard } from "../../feature";
import { MainImg, MainImg2, MainImg3 } from '../../../assets';


const cards = [
  {
    title: 'Digital Playbook',
    desc: <>Lorem Ipsum Dolor min halt darim komp din harty walar yip patt baraan min skat</>,
  },
  {
    title: 'AI Assessment',
    desc: <>Lorem Ipsum Dolor min halt darim komp din harty walar yip patt baraan min skat</>,
  },
  {
    title: 'AI Assistant',
    desc: <>Lorem Ipsum Dolor min halt darim komp din harty walar yip patt baraan min skat</>,
  },
]

const Main = () => {
  // State to track the currently hovered card
  const [hoveredCard, setHoveredCard] = useState(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (card) => {
    console.log(`Mouse entered: ${card}`); // Debugging log
    setHoveredCard(card);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    console.log('Mouse left');
    setHoveredCard(null);
  };

  // Determine the image to display based on the hovered card
  const getImage = () => {
    switch (hoveredCard) {
      case 'Digital Playbook':
        return MainImg;
      case 'AI Assessment':
        return MainImg2;
      case 'AI Assistant':
        return MainImg3;
      default:
        return MainImg;
    }
  };

  return (
    <div className='mt-[100px] sm:mt-[250px] lg:mt-[400px]'>
      <h1 className='lg:text-[40px] md:block hidden text-[30px] text-center font-semibold mb-14'>
        Develop your documentation <br /> at <span className='text-gradient font-bold'>Change AI</span>
      </h1>
      <h1 className='md:hidden text-[25px] text-center font-semibold mb-14'>
        Develop your documentation at <span className='text-gradient font-bold'>Change AI</span>
      </h1>
      <div className='grid w-[80%] mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[25px]'>
        {cards.map((x)=>(
          <MainCard
          title={x.title}
          desc={x.desc}
          onMouseEnter={() => handleMouseEnter(x.title)}
          onMouseLeave={handleMouseLeave}
        />
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <img className='w-[70%] rounded-3xl shadow-md' src={getImage()} alt="Main visual" />
      </div>
    </div>
  );
};

export default Main;
