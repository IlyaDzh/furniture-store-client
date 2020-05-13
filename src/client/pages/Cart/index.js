import React from "react";

import { Section } from "client/components";
import { Table, Order } from "./containers";

const Cart = () => (
    <Section className="cart" title="Корзина">
        <Table />
        <Order />
    </Section>
);

export default Cart;
