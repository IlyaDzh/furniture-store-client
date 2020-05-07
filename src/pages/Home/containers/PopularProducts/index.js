import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Section, Slider } from "components";
import { productsActions } from "actions";

const PopularProducts = ({ fetchPopularProducts, popularItems }) => {
    useEffect(() => {
        if (!popularItems.length) {
            fetchPopularProducts();
        }
    }, [popularItems]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section title="Популярные модели сезона">
            <Slider items={popularItems} />
        </Section>
    );
};

export default connect(
    ({ products }) => ({
        popularItems: products.popularItems
    }),
    productsActions
)(PopularProducts);
