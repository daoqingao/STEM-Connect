import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/HomePageHeader.js";
import Features from "components/features/WhoWeAre.js";
import Features2 from "components/features/HomePageValues";
import SliderCard from "components/cards/FeaturedProgramsSlider.js";
import Footer from "components/footers/MainFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Features2/>
    <SliderCard />
    <Footer />
  </AnimationRevealPage>
);
