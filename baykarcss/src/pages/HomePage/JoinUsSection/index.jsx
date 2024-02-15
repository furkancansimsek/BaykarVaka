import React from 'react';
import AppContainer from "../../../components/AppContainer";
import AppSignButton from "../../../components/AppSignButton";
import useWindowDimensions from "../../../core/hooks/useWindowDimensions";

const JoinUsSection = () => {
    const {width} = useWindowDimensions();
    return (<>
        <div className="py-4 md:py-[160px] bg-lightYellow overflow-x-hidden">
            <AppContainer>
                <div
                    className="h-[690px] md:h-[496px] grid grid-cols-1 md:grid-cols-2 bg-white py-8 px-4 md:p-[80px] rounded-[30px] shadow-2xl relative">
                    <div className="flex flex-col text-textPrimary items-center md:items-start">
                        <h3 className="font-bold text-[32px] md:font-extrabold md:text-[56px]">Why join us</h3>
                        <ul className="my-6 list-image-[url('/public/assets/icons/tick.svg')] pl-6">
                            <li className="list-item leading-[180%] text-xl">Est et in pharetra magna adipiscing ornare
                                aliquam.
                            </li>
                            <li className="list-item leading-[180%] text-xl">Tellus arcu sed consequat ac velit ut eu
                                blandit.
                            </li>
                            <li className="list-item leading-[180%] text-xl">Ullamcorper ornare in et egestas dolor
                                orci.
                            </li>
                        </ul>
                        <AppSignButton className="z-10">Sign up now</AppSignButton>
                    </div>
                    <div className="flex scale-[1.3] mt- md:scale-[1.3] md:mt-[-70px] md:mr-[-38px]">
                        {/*{width > 768 ?
                                <img
                                    className="scale-[1.2] absolute -top-[90px] -right-[55px]"
                                    src="/assets/images/joinUsBg.svg" alt="JOINUS"/>
                                :
                                <img
                                    className="absolute -top-[125px] -left-[55px]"
                                    src="/assets/images/Deco-video.png" alt="JOINUS"/>
                            }*/}
                        {/*<img
                                className=""
                                src="/assets/images/joinUsBg.svg" alt="JOINUS"/>*/}
                        {width > 768 ? <img
                            className=""
                            src="/assets/images/joinUsBg.svg" alt="JOINUS"/> : <img
                            className=""
                            src="/assets/images/joinUsBgMobile.svg" alt="JOINUS"/>}
                    </div>
                </div>
            </AppContainer>
        </div>
    </>);
};

export default JoinUsSection;