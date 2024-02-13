import React from 'react'

const BannerCard = ({children, iconSrc, title}) => {
  return (
    <>
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
            <img src={iconSrc} alt="CARDICON" />
            <h4 className='font-medium text-xl my-4'>{title}</h4>
            <p className='text-[18px]'>{children}</p>
        </div>
    </>
  )
}

export default BannerCard