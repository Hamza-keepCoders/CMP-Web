import React from 'react'
import { teamslide1, teamslide2, video } from '../../../assets'

const Team = () => {
  return (
    <div className='my-20'>
      <h1 className='text-[40px] md:block hidden leading-[48.41px] text-center font-[600]'>An <span className='text-gradient text-[48px]'>END-TO-END</span> business <br /> platform for your team</h1>
      <h1 className='text-[30px] md:hidden leading-[48.41px] text-center font-[600]'>An <span className='text-gradient text-[38px]'>END-TO-END</span> business platform for your team</h1>
      <div className='my-20 flex md:flex-row flex-col gap-10 justify-center'>
        <div>
            <img src={video} alt="" />
        </div>
        <div className='flex flex-col gap-10'>
            <div className='bg-white rounded-[30px] p-5 h-[80%] relative flex flex-col justify-end'>
                <button className='bg-[#C3E11D] rounded-full py-2 px-3 absolute right-5 top-5'><i className='fa fa-arrow-right rotate-[-50deg] text-3xl text-white'></i></button>
                <h2 className='text-4xl'>4x your data response rate with <br /> generative AI and instant output <br /> formats.</h2>
            </div>
            <div className='flex justify-between items-center py-3 px-3 rounded-full bg-[#E4E4E4]'>
                <h2 className='flex items-center'><img src={teamslide1} alt="" /></h2>
                <h2 className='flex items-center'><img src={teamslide2} alt="" /></h2>
                <h2 className='flex items-center'><img src={teamslide1} alt="" /></h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
