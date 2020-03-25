import React from "react";

import { ScrollToTop, Section } from "components";
import { AboutUsInfo } from "./containers";

const AboutUs = () => (
    <Section className="about" title="О нашей фабрике">
        <ScrollToTop />
        <AboutUsInfo />
    </Section>
);

export default AboutUs;
