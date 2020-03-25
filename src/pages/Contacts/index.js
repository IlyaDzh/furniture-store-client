import React from "react";

import { ScrollToTop, Section } from "components";
import { ContactsInfo } from "./containers";

const Contacts = () => (
    <Section className="contacts" title="Контакты">
        <ScrollToTop />
        <ContactsInfo />
    </Section>
);

export default Contacts;
