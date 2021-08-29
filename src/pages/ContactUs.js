import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MainFooter";
import ContactUsForm from "components/forms/ContactUsForm.js";
import ContactDetails from "components/cards/ContactTeamDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Taylor Ngo",
            description: (
              <>
                <Address>
                    <AddressLine><a href="www.taylorngo.com">www.taylorngo.com</a></AddressLine>
                </Address>
                <Email>cs.taylorngo@gmail.com</Email>
                  <Phone><a href="https://www.instagram.com/tayylor_ngo/">@tayylor_ngo</a></Phone>
              </>
            )
          },
          {
            title: "Daoqin Gao",
            description: (
              <>
                <Email>daoqin.gao@stonybrook.edu</Email>
              </>
            )
          },
          {
            title: "Michael Chan",
            description: (
              <>
                <Email>michael.chan3@stonybrook.edu</Email>
              </>
            )
          },
          {
            title: "Jeffrey Liew",
            description: (
              <>
                <Email>jeffrey.liew@stonybrook.edu</Email>
              </>
            )
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
