import React from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import MegaSell from "../components/common/MegaSell";
import Option from "../components/common/Option";
import ProvideBest from "../components/ProvideBest/ProvideBest";

const About = () => {
  return (
    <>
      <AboutHero />
      {/* mega sale */}
      <MegaSell/>
      {/* provide the best */}
      <ProvideBest/>
      {/* Option part */}
      <Option/>
      {/* Option part */}
    </>
  );
};

export default About;
