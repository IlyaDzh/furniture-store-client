import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Spinner, Error } from "components";
import { CatalogByPath as BaseCatalogByPath } from "../components";
import { catalogActions, cartActions } from "actions";

const CatalogByPath = ({
    fetchCurrentCatalog,
    fetchAddToCart,
    currentItem,
    isLoading,
    error
}) => {
    const { path } = useParams();

    useEffect(() => {
        if (currentItem && currentItem.path === path) return;
        fetchCurrentCatalog(path);
    }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

    return isLoading ? (
        <Spinner />
    ) : error ? (
        <Error />
    ) : (
        currentItem && (
            <BaseCatalogByPath
                currentItem={currentItem}
                fetchAddToCart={fetchAddToCart}
            />
        )
    );
};

export default connect(
    ({ catalog }) => ({
        currentItem: catalog.currentItem,
        isLoading: catalog.isLoading,
        error: catalog.error
    }),
    {
        fetchCurrentCatalog: catalogActions.fetchCurrentCatalog,
        fetchAddToCart: cartActions.fetchAddToCart
    }
)(CatalogByPath);
