import React from "react";
import { connect } from "react-redux";

import { Table as BaseTable } from "../../components";
import { userActions } from "actions";

const Table = ({ cart, fetchChangeCount, fetchRemoveCart }) => {
    return (
        <BaseTable
            cart={cart}
            changeCount={fetchChangeCount}
            removeItem={fetchRemoveCart}
        />
    );
};

export default connect(
    ({ user }) => ({
        cart: user.cart,
        error: user.error,
        isLoading: user.isLoading
    }),
    userActions
)(Table);
