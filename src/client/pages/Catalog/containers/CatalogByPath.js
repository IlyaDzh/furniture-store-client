import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Spinner, Error } from "client/components";
import { CatalogByPath as BaseCatalogByPath } from "../components";
import { catalogActions, cartActions } from "client/actions";

const CatalogByPath = ({
    fetchCurrentCatalog,
    addToCart,
    currentItem,
    tempItem,
    isLoading,
    error,
    reset
}) => {
    const { path } = useParams();

    useEffect(() => {
        if (currentItem && currentItem.path === path) return;
        fetchCurrentCatalog(path);
        return () => reset();
    }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

    return isLoading ? (
        <Spinner />
    ) : error ? (
        <Error />
    ) : (
        currentItem && (
            <BaseCatalogByPath
                currentItem={tempItem || currentItem}
                addToCart={addToCart}
            />
        )
    );
};

export default connect(
    ({ catalog }) => ({
        currentItem: catalog.currentItem,
        tempItem: catalog.tempItem,
        isLoading: catalog.isLoading,
        error: catalog.error
    }),
    {
        fetchCurrentCatalog: catalogActions.fetchCurrentCatalog,
        reset: catalogActions.reset,
        addToCart: cartActions.addToCart
    }
)(CatalogByPath);
