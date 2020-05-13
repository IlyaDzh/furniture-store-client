import React from "react";
import { connect } from "react-redux";

import { MiniCart as BaseMiniCart } from "client/components";

const MiniCart = ({ cart }) => {
    const totalPrice = cart.reduce(
        (acc, { product, count }) => acc + product.price * count,
        0
    );

    return <BaseMiniCart count={cart.length} total={totalPrice} />;
};

export default connect(({ cart }) => ({ cart: cart.items }))(MiniCart);
