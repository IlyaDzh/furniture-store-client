import React from "react";

import { ScrollToTop, Section } from "components";
import { Table } from "./components";

const Cart = () => (
    <Section className="cart" title="Корзина">
        <ScrollToTop />
        <Table />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad placeat
            blanditiis, libero delectus fugiat illum, fuga dolore iste minima
            excepturi quasi expedita consequatur nihil, unde corrupti sequi officia
            tenetur soluta!
        </p>
    </Section>
);

export default Cart;
