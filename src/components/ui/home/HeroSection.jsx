import React from 'react'
import {DottedBg, heroBg, heroBg2, MainBg} from "../../../assets"

const HeroSection = () => {
  return (
    <div className={`flex flex-col justify-center items-center`}>
    <img className='absolute z-0 xl:top-24 md:top-28 top-32' src={MainBg} alt="" />
    <img className='absolute z-0' src={DottedBg} alt="" />
    <div className='flex flex-col justify-center items-center'>
    <h1 className={`bg-[url(${heroBg})] bg-no-repeat bg-center bg-cover lg:py-16 py-5 text-[30px] sm:text-[45px] z-10 md:text-[60px] xl:text-[90px] text-center font-[900] md:leading-[70px] leading-[40px] xl:leading-[90px] flex flex-col my-auto`}>
        Transforming the <br/> future of <br /> Documentation
    </h1>
    <button className='flex z-10 item-center gap-2 bg-[#C3E11D] py-3 font-semibold md:text-lg text-xs px-5 rounded-full'>Get Free Demo <i className='fa fa-arrow-right rotate-[-50deg] md:text-xl text-xs'></i></button>
    </div>
</div>
  )
}

export default HeroSection
