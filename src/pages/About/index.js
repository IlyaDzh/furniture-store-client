import React from "react";

import { ScrollToTop, Section } from "components";
import { InfoAboutUs } from "./containers";
import "./About.scss";

const About = () => {
    return (
        <Section className="about" title="О нашей фабрике">
            <ScrollToTop />
            <InfoAboutUs />
        </Section>
    );
};

export default About;
