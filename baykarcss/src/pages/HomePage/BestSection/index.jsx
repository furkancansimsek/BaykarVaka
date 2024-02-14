import React from 'react'
import AppSignButton from '../../../components/AppSignButton'
import AppContainer from '../../../components/AppContainer'
import useWindowDimensions from '../../../core/hooks/useWindowDimensions';
import BestCard from './BestCard';

const BestSection = () => {
    const { width } = useWindowDimensions();
  return (
    <>
        <div className="bg-[#0F172A] min-h-[776px] py-[48px] md:py-[80px] overflow-hidden relative">
            <AppContainer>
                <div className="flex flex-wrap justify-center gap-y-8 md:justify-between items-center md:pb-[49px]">
                    <h3 className='font-bold text-[32px] md:font-extrabold md:text-[56px] text-white'>The best of the best</h3>
                    <AppSignButton primary={false}>Sign up now</AppSignButton>
                </div>
            </AppContainer>
            <div className='relative z-10'>
                {width > 768 ? 
                <img className='absolute left-1/2 -translate-x-1/2 -z-[1]' src="/assets/images/backlights.svg" alt="BESTBACKGROUND" /> 
                : 
                <img className='absolute left-1/2 -translate-x-1/2 top-[22%] scale-y-[0.97] -z-[1]' src="/assets/images/backlightsMobile.svg" alt="BESTBACKGROUND" />
                }
                <AppContainer className="z-10 pt-[32px] grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
                    <BestCard imageSrc='/assets/images/best1.jpg' title='Title'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</BestCard>
                    <BestCard imageSrc='/assets/images/best2.jpg' title='Title'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</BestCard>
                    <BestCard imageSrc='/assets/images/best3.jpg' title='Title'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</BestCard>
                </AppContainer>
            </div>
        </div>   
    </>
  )
}

export default BestSection