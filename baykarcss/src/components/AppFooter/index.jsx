import React from 'react';
import AppContainer from "../AppContainer";

const AppFooter = () => {
    return (
        <>
            <div className="bg-textPrimary">
                <AppContainer>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-[60px]">
                        <div className="flex flex-col gap-6 text-white items-center md:items-start">
                            <h5 className="font-medium">Product</h5>
                            <a href="#">Pricing</a>
                            <a href="#">Overview</a>
                            <a href="#">Browse</a>
                            <a href="#">Accessibility</a>
                            <a href="#">Five</a>
                        </div>
                        <div className="flex flex-col gap-6 text-white items-center md:items-start">
                            <h5 className="font-medium">Solutions</h5>
                            <a href="#">Brainstorming</a>
                            <a href="#">Ideation</a>
                            <a href="#">Wireframing</a>
                            <a href="#">Research</a>
                            <a href="#">Design</a>
                        </div>
                        <div className="flex flex-col gap-6 text-white items-center md:items-start">
                            <h5 className="font-medium">Support</h5>
                            <a href="#">Contact Us</a>
                            <a href="#">Developers</a>
                            <a href="#">Documentation</a>
                            <a href="#">Integrations</a>
                            <a href="#">Reports</a>
                        </div>
                        <div className="flex flex-col text-white items-center md:items-start">
                            <h5 className="font-medium mb-6">Get the App</h5>
                            <a href="#" className="mb-2">
                                <img src="/assets/images/appStore.svg" alt="APPSTORE"/>
                            </a>
                            <a href="#" className="mb-[56px]">
                                <img src="/assets/images/googlePlay.svg" alt="GOOGLEPLAY"/>
                            </a>
                            <a href="#" className="mb-5">Follow us</a>
                            <div className="flex gap-4">
                                <a href="#">
                                    <img src="/assets/icons/youtube.svg" alt="YOUTUBE"/>
                                </a>
                                <a href="#">
                                    <img src="/assets/icons/facebook.svg" alt="FACEBOOK"/>
                                </a>
                                <a href="#">
                                    <img src="/assets/icons/twitter.svg" alt="TWITTER"/>
                                </a>
                                <a href="#">
                                    <img src="/assets/icons/instagram.svg" alt="INSTAGRAM"/>
                                </a>
                                <a href="#">
                                    <img src="/assets/icons/linkedin.svg" alt="LINKEDIN"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#334155]" />
                    <div className="flex text-white flex-col md:flex-row gap-y-6 py-[37px] items-center justify-between">
                        <p>Collers @ 2023. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                            <a href="#">Contact</a>
                            <a href="#" className="flex gap-2"><img src="/assets/icons/world.svg" alt="LANGUAGE"/> EN</a>
                        </div>
                    </div>
                </AppContainer>
            </div>
        </>
    );
};

export default AppFooter;