import React from 'react'
import AppHeader from '../../../components/AppHeader'
import AppContainer from '../../../components/AppContainer'
import AppSignButton from '../../../components/AppSignButton'
import BannerCard from './BannerCard'

const BannerSection = () => {
  return (
    <div className='relative md:bg-[#FFFCEE] z-[1]'>
        <AppHeader/>
        <div className="bg-[#FEF3C7] absolute bottom-0 right-0 h-full w-full z-[2] [clip-path:polygon(0_52%,100%_33%,100%_100%,0%_100%)] md:[clip-path:polygon(100%_23%,1%_100%,100%_100%)]">
            &nbsp;
        </div>
        <AppContainer>
            <div className="grid grid-cols-1 md:grid-cols-[714px_auto] gap-x-[80px] gap-y-[32px] py-[48px] md:py-[80px] place-items-center">
                <div className="flex items-center md:items-start md:text-start text-center flex-col text-textPrimary z-10 columns-[714px]">
                    <h1 className='font-extrabold text-6xl md:text-7xl'>Collectible Sneakers</h1>
                    <p className='text-[18px] my-8'>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                    <div className="flex items-center gap-x-[26px]">
                        <AppSignButton size="md">Sign up now</AppSignButton>
                        <a href="#" className='flex gap-x-2 text-primary font-medium'> <img src="/assets/icons/play.svg" alt="PLAY" />Watch Demo</a>
                    </div>
                </div>
                <div className="flex z-10">
                    <img src="/assets/images/bannerNike.png" alt="BANNERNIKE" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[80px] gap-y-8 py-[48px] md:py-[80px]">
                <BannerCard iconSrc='/assets/icons/bannerCardIcon1.svg' title='Nibh viverra'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </BannerCard>
                <BannerCard iconSrc='/assets/icons/bannerCardIcon3.svg' title='Cursus amet'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </BannerCard>
                <BannerCard iconSrc='/assets/icons/bannerCardIcon2.svg' title='Ipsum fermentum'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </BannerCard>
            </div>
        </AppContainer>
    </div>
  )
}

export default BannerSection