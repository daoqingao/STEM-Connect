import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import MainFeature1 from "components/features/WhoWeAre.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/WhoWeAre2";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/TeamCard.js";
import FAQ from "components/faqs/Questions";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature3
        subheading={<Subheading>About STEM Connect</Subheading>}
        heading="We are a platform for educators and students."
        buttonRounded={false}
        primaryButtonText="See Programs"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
      />
        <Features/>
        <FAQ/>
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
