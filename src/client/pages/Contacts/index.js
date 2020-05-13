import React from "react";

import { Section } from "client/components";
import { Map } from "./components";
import { ContactsList } from "./containers";

const Contacts = () => (
    <Section className="contacts" title="Контакты">
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
