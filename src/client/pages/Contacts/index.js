import React from "react";

import { ScrollToTop, Section } from "components";
import { Map } from "./components";
import { ContactsList } from "./containers";

const Contacts = () => (
    <Section className="contacts" title="Контакты">
        <ScrollToTop />
        <div className="row">
            <div className="col-md-6">
                <ContactsList />
            </div>
            <div className="col-md-6">
                <Map />
            </div>
        </div>
    </Section>
);

export default Contacts;
