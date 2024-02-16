import React from 'react';
import useWindowDimensions from "../../../core/hooks/useWindowDimensions";
import AppContainer from "../../../components/AppContainer";

const CollectSection = () => {

    const {width} = useWindowDimensions();

    return (
        <>
            <div className="bg-primary overflow-x-hidden flex justify-center items-center relative pb-20">
                {width > 768 ? <AppContainer>
                        <img className="w-full" src="/assets/images/CollectSection.png" alt="BG"/>
                    </AppContainer> :
                    <img className="w-full pl-8" src="/assets/images/collectMobile.png" alt="BG"/>}
                <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 span text-center text-white font-extrabold text-[48px] md:text-[96px]">
                    <span>11,658,467</span>
                    <span className="text-[32px] md:text-[56px] font-bold whitespace-nowrap">Shoes Collected</span>
                </div>
            </div>
        </>
    );
};

export default CollectSection;