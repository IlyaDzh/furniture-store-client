import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Section, Slider, Spinner } from "client/components";
import { productsActions, cartActions } from "client/actions";

const NewProducts = ({ fetchNewProducts, addToCart, newItems }) => {
    useEffect(() => {
        if (!newItems.length) {
            fetchNewProducts();
        }
    }, [newItems]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section title="Новые модели в каталоге">
            {!newItems.length ? (
                <Spinner />
            ) : (
                <Slider items={newItems} addToCart={addToCart} />
            )}
        </Section>
    );
};

export default connect(
    ({ products }) => ({
        newItems: products.newItems
    }),
    {
        fetchNewProducts: productsActions.fetchNewProducts,
        addToCart: cartActions.addToCart
    }
)(NewProducts);
