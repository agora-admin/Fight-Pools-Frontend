import React, { FC } from 'react'

interface CardProps{
    firstHeading: string,
    secondHeading: string,
    imageUrl: string,
    alternate: boolean
}

const Card: FC<CardProps> = ({firstHeading,secondHeading,imageUrl,alternate}) => {
  return (
    <div className={`bg-lightBlue rounded-[32px] md:rounded-[60px] mb-8 sm:mb-10 px-8 md:px-12 py-5 border-4 border-[#E0F2FF] h-auto md:h-[200px] w-[80%] flex flex-col-reverse ${alternate && "md:flex-row-reverse"} ${!alternate && "md:flex-row"} justify-center md:justify-between items-center`}>
         <div className='flex flex-col mt-8 md:mt-0'>
            <h1 className='text-primary font-gilroy-heavy text-sm sm:text-lg md:text-xl'>{firstHeading}</h1>
            <h1 className='text-orange font-gilroy text-sm sm:text-lg md:text-xl'>{secondHeading}</h1>
         </div>

         <div className={`w-full h-full flex justify-center items-center ${!alternate && "md:justify-end"} ${alternate && "md:justify-start"}`}>
            <img src={`/${imageUrl}`} alt="just a image" width={100} height={100} className='w-[50%] h-[50%] md:w-[70%] md:h-[70%] '/>
         </div>
    </div>
  )
}

export default Card