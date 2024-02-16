import React, {useCallback, useRef} from 'react';
import AppContainer from "../../../components/AppContainer";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LoveCard from "./LoveCard";
import {Lovers} from "../../../shared/constants/Lovers";
import useWindowDimensions from "../../../core/hooks/useWindowDimensions";

const LoveUsSection = () => {
    const sliderRef = useRef(null);

    const {width} = useWindowDimensions();

    const handlePrev = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    };
    return (
        <div className="bg-lightYellow py-[80px]">
            <AppContainer>
                <div className="flex justify-center md:justify-between items-center">
                    <h3 className="font-bold text-[32px] md:font-extrabold md:text-[56px] mb-10">Because they love
                        us</h3>
                    <div className="hidden md:flex gap-6 mb-10">
                        <img onClick={handlePrev} className="cursor-pointer border-2 border-primary p-3 rounded-full"
                             src="/assets/icons/arrow.svg" alt="ARROW"/>
                        <img onClick={handleNext} className="cursor-pointer border-2 border-primary p-3 rounded-full rotate-180"
                             src="/assets/icons/arrow.svg" alt="ARROW"/>
                    </div>
                </div>
            </AppContainer>
            <div className="relative">
                <div className="z-10 top-0 bg-yellow h-[277px] md:h-[421px] max-w-[1360px] mx-auto"></div>
                <div className="absolute top-4 md:top-10 w-full">
                    <Swiper
                        ref={sliderRef}
                        spaceBetween={width > 768 ? 24 : 16}
                        slidesPerView={width > 768 ? (width > 1180 ? 3.5 : 2) : 1.25}
                        initialSlide={2}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        centerInsufficientSlides={true}
                    >
                        {Lovers.map((lover, key)=>(
                            <SwiperSlide key={key}><LoveCard comment={lover?.comment} logo={lover?.logo} user={lover?.user}/></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default LoveUsSection;