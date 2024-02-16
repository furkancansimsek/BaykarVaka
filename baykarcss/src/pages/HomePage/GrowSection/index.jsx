import React from 'react';
import AppContainer from "../../../components/AppContainer";
import GrowButton from "./GrowButton";
import {Lovers} from "../../../shared/constants/Lovers";
import {Swiper, SwiperSlide} from "swiper/react";
import LoveCard from "../LoveUsSection/LoveCard";
import {FreeMode} from "swiper/modules";
import useWindowDimensions from "../../../core/hooks/useWindowDimensions";

const GrowSection = () => {

    const {width} = useWindowDimensions();

    return (
        <div className="bg-lightYellow pt-12 md:pt-[80px] relative pb-[96px] md:pb-[128px] overflow-x-hidden">
            <AppContainer className="z-10">
                <div className="flex flex-col justify-center md:justify-start gap-8 mb-8 md:mb-[80px]">
                    <h3 className="font-bold text-[32px] md:font-extrabold md:text-[56px] text-center md:text-left">Grow
                        your collection</h3>
                    <p className="text-[16px] md:text-[18px] leading-[140%] md:leading-[160%] text-center md:text-left">Enim
                        neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu
                        non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam
                        tellus.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 md:h-[556px] z-10">
                    {width > 768 ? <div className="flex flex-row md:flex-col items-start z-10 gap-4">
                        <GrowButton icon="/assets/icons/search.svg">Bibendum tellus</GrowButton>
                        <GrowButton icon="/assets/icons/shield.svg">Cras eget</GrowButton>
                        <GrowButton icon="/assets/icons/rocket.svg">Dolor pharetra</GrowButton>
                        <GrowButton icon="/assets/icons/pc.svg">Amet, fringilla</GrowButton>
                        <GrowButton icon="/assets/icons/wifi.svg">Amet nibh</GrowButton>
                        <GrowButton icon="/assets/icons/settings.svg">Sed velit</GrowButton>
                    </div> : <Swiper
                        spaceBetween={16}
                        slidesPerView={1.5}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="w-full mb-8"
                    >
                        <SwiperSlide><GrowButton icon="/assets/icons/search.svg">Bibendum
                            tellus</GrowButton></SwiperSlide>
                        <SwiperSlide><GrowButton icon="/assets/icons/shield.svg">Cras eget</GrowButton></SwiperSlide>
                        <SwiperSlide>
                            <GrowButton icon="/assets/icons/rocket.svg">Dolor
                                pharetra</GrowButton></SwiperSlide>
                        <SwiperSlide><GrowButton icon="/assets/icons/pc.svg">Amet, fringilla</GrowButton></SwiperSlide>
                        <SwiperSlide><GrowButton icon="/assets/icons/wifi.svg">Amet nibh</GrowButton></SwiperSlide>
                        <SwiperSlide><GrowButton icon="/assets/icons/settings.svg">Sed velit</GrowButton></SwiperSlide>
                    </Swiper>}

                    <img className="col-span-3 z-10" src="/assets/images/grow.png" alt="GROW"/>
                </div>
            </AppContainer>
            <img className="absolute bottom-0 right-0 w-full z-[1]" src="/assets/images/growBg.svg" alt="GROWBG"/>
        </div>
    );
};

export default GrowSection;