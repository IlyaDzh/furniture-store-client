import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ScrollToTop, Section } from "components";
import { Table } from "./components";
import { Order } from "./containers";
import { userActions } from "actions";

const Cart = ({
    fetchUserData,
    fetchChangeCount,
    fetchRemoveCart,
    isAuth,
    data,
    cart
}) => {
    useEffect(() => {
        if (isAuth && !data) {
            fetchUserData();
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section className="cart" title="Корзина">
            <ScrollToTop />
            <Table
                cart={cart}
                changeCount={fetchChangeCount}
                removeItem={fetchRemoveCart}
            />
            <Order data={data} cart={cart} />
        </Section>
    );
};

export default connect(
    ({ user }) => ({
        isAuth: user.isAuth,
        data: user.data,
        cart: user.cart
    }),
    userActions
)(Cart);
