import React, { FC } from 'react'

interface CardProps{
    firstHeading: string,
    secondHeading: string,
    imageUrl: string,
    alternate: boolean
}

const Card: FC<CardProps> = ({firstHeading,secondHeading,imageUrl,alternate}) => {
  return (
    <div className={`bg-lightBlue rounded-[60px] mb-10 px-12 py-5 border-4 border-[#E0F2FF] h-[200px] w-[80%] flex ${alternate && "flex-row-reverse"} justify-between items-center`}>
         <div className='flex flex-col'>
            <h1 className='text-primary font-gilroy-heavy text-xl'>{firstHeading}</h1>
            <h1 className='text-orange font-gilroy text-xl'>{secondHeading}</h1>
         </div>

         <div className={`w-full h-full flex ${!alternate && "justify-end"} ${alternate && "justify-start"} items-center`}>
            <img src={`/${imageUrl}`} alt="just a image" width={100} height={100} className='w-[70%] h-[70%] '/>
         </div>
    </div>
  )
}

export default Card