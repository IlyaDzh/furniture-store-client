import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ScrollToTop, Section } from "components";
import { Table } from "./components";
import { Order } from "./containers";
import { userActions, cartActions } from "actions";

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
    ({ user, cart }) => ({
        isAuth: user.isAuth,
        data: user.data,
        cart: cart.items
    }),
    {
        fetchUserData: userActions.fetchUserData,
        fetchChangeCount: cartActions.fetchChangeCount,
        fetchRemoveCart: cartActions.fetchRemoveCart
    }
)(Cart);
