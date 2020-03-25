import React from "react";

import { ScrollToTop, Section } from "components";
import { PaymentDeliveryInfo } from "./containers";

const PaymentDelivery = () => (
    <Section className="pay-del" title="Оплата и доставка">
        <ScrollToTop />
        <PaymentDeliveryInfo />
    </Section>
);

export default PaymentDelivery;
