import React from "react";

import { ScrollToTop, Section } from "components";
import { AboutUsInfo } from "./containers";
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <Section className="about" title="О нашей фабрике">
            <ScrollToTop />
            <AboutUsInfo />
        </Section>
    );
};

export default AboutUs;
