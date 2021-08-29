import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/ProgramPageHeading.js";
import Footer from "components/footers/MainFooter.js";
import RegisterForm from "components/forms/RegisterProgramForm.js";

export default () => {
  // const Subheading = tw.span`tracking-wider text-sm font-medium`;
  // const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  // const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  // const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Web Development Workshop</>}
        author="STEM Connect Inc."
        description="Want to learn how to make your own website? Interested in honing your skills as a web developer?
        look no further as this web development workshop will teach you all that. Hosted by Matt Yeh himself, the creator of
        ValPals.com, Matt will be teaching you how to create your own dynamic website in no time! Register today!!!"
        price="$20/hour"
        imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
        <RegisterForm
            name="Web Development Workshop"
        />
      <Footer />
    </AnimationRevealPage>
  );
}
