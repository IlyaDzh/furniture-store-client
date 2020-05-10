import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Section, Slider, Spinner } from "components";
import { productsActions, cartActions } from "actions";

const PopularProducts = ({ fetchPopularProducts, fetchAddToCart, popularItems }) => {
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
                <Slider items={popularItems} fetchAddToCart={fetchAddToCart} />
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
        fetchAddToCart: cartActions.fetchAddToCart
    }
)(PopularProducts);
