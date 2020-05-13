import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Section, Slider, Spinner } from "client/components";
import { productsActions, cartActions } from "client/actions";

const PopularProducts = ({ fetchPopularProducts, addToCart, popularItems }) => {
    useEffect(() => {
        if (!popularItems.length) {
            fetchPopularProducts();
        }
    }, [popularItems]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section title="Популярные модели сезона">
            {!popularItems.length ? (
                <Spinner />
            ) : (
                <Slider items={popularItems} addToCart={addToCart} />
            )}
        </Section>
    );
};

export default connect(
    ({ products }) => ({
        popularItems: products.popularItems
    }),
    {
        fetchPopularProducts: productsActions.fetchPopularProducts,
        addToCart: cartActions.addToCart
    }
)(PopularProducts);
