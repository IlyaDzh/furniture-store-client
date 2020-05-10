import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Section, Slider, Spinner } from "components";
import { productsActions, cartActions } from "actions";

const NewProducts = ({ fetchNewProducts, fetchAddToCart, newItems }) => {
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
                <Slider items={newItems} fetchAddToCart={fetchAddToCart} />
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
        fetchAddToCart: cartActions.fetchAddToCart
    }
)(NewProducts);
