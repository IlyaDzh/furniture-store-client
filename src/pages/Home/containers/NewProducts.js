import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Section, Slider, Spinner } from "components";
import { productsActions } from "actions";

const NewProducts = ({ fetchNewProducts, newItems }) => {
    useEffect(() => {
        if (!newItems.length) {
            fetchNewProducts();
        }
    }, [newItems]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section title="Новые модели в каталоге">
            {!newItems.length ? <Spinner /> : <Slider items={newItems} />}
        </Section>
    );
};

export default connect(
    ({ products }) => ({
        newItems: products.newItems
    }),
    productsActions
)(NewProducts);