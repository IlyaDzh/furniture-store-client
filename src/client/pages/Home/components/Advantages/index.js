import React from "react";

import { Section } from "client/components";
import { AdvantagesItem } from "../";
import "./Advantages.scss";

import advantagesJSON from "./advantages.json";

const Advantages = () => (
    <Section className="section-orange advantages" title="Наши преимущества">
        <div className="row">
            {advantagesJSON.length > 0 &&
                advantagesJSON.map(item => (
                    <AdvantagesItem key={item.id} {...item} />
                ))}
        </div>
    </Section>
);

export default Advantages;
