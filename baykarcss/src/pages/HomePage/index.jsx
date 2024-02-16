import React from 'react'
import BannerSection from './BannerSection'
import BestSection from './BestSection'
import JoinUsSection from "./JoinUsSection";
import AppFooter from "../../components/AppFooter";
import LoveUsSection from "./LoveUsSection";
import GrowSection from "./GrowSection";
import CollectSection from "./CollectSection";

const HomePage = () => {
  return (
    <>
        <BannerSection/>
        <BestSection/>
        <JoinUsSection/>
        <LoveUsSection/>
        <GrowSection/>
        <CollectSection/>
        <AppFooter/>
    </>
  )
}

export default HomePage