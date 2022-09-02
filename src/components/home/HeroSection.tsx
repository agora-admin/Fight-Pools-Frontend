import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-[#FF2E40] text-lightBlue relative h-[50%] sm:h-[90%] relative flex flex-col justify-start items-center pt-10 sm:pt-20 gap-2'>
        <h1 className='font-gilroy-heavy text-2xl sm:text-5xl md2:text-7xl'>BRING ON THE FIGHT!</h1>
        <p className='font-bold text-[7.5px] sm:text-[15px] md2:text-[19px]'>Decentralized Fight Promotion through Crowdfunding and Fan led governance</p>
        <Link href='/discourses' passHref>
          <button className='bg-primary floating-btn rounded-[89px] p-3 text-[8px] sm:text-[11px] font-bold border-2 border-lightBlue mt-5'>
            Launch dAPP 
            <span className='bg-[#FF2E40] ml-2 rounded-[89px] px-2 py-1 text-[6px] sm:text-[9px]'>BETA</span>
          </button>
        </Link>
        
        <div className='absolute bottom-0 h-[47%]'>
            <img className='h-full w-full' src='/HeroSection_Banner.svg' height={100} width={100} alt="boxing gloves" />
        </div>
    </div>
  )
}

export default HeroSection