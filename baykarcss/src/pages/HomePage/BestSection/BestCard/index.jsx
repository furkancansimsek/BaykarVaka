import React from 'react'

const BestCard = ({imageSrc, title, children}) => {
  return (
    <div className='z-10 rounded-[10px] min-h-[472px] bg-[#0F172A] overflow-hidden drop-shadow-[0_15px_15px_rgba(255,255,255,0.25)]'>
        <img className='w-full' src={imageSrc} alt="BEST" />
        {/* <div className='h-[220px] bg-cover bg-no-repeat' style={{
            backgroundImage: `url('${imageSrc}')`
        }}></div> */}
        <div className="p-8 text-white">
            <h4 className='font-bold text-2xl mb-4'>{title}</h4>
            <p className='text-lg mb-8'>{children}</p>
            <a href="#" className='flex gap-4 justify-center items-center w-full border-2 rounded-lg py-4'> <img src="/assets/icons/basket.svg" alt="BASKET" /> Buy Now</a>
        </div>
    </div>
  )
}

export default BestCard