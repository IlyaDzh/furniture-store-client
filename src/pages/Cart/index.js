import React from "react";

import { ScrollToTop, Section } from "components";
import { Table, Order } from "./containers";

const Cart = () => (
    <Section className="cart" title="Корзина">
        <ScrollToTop />
        <Table />
        <Order />
    </Section>
);

export default Cart;
