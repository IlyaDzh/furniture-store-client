import React from "react";
import { connect } from "react-redux";

import { Table as BaseTable } from "../components";
import { cartActions } from "client/actions";

const Table = ({ cart, changeCount, removeItem }) => (
    <BaseTable cart={cart} changeCount={changeCount} removeItem={removeItem} />
);

export default connect(
    ({ cart }) => ({
        cart: cart.items
    }),
    cartActions
)(Table);
