import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Spinner, Error } from "components";
import { CatalogByPath as BaseCatalogByPath } from "../../components";
import { catalogActions } from "actions";

const CatalogByPath = ({ fetchCurrentCatalog, currentItem, isLoading, error }) => {
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
        currentItem && <BaseCatalogByPath currentItem={currentItem} />
    );
};

export default connect(
    ({ catalog }) => ({
        currentItem: catalog.currentItem,
        isLoading: catalog.isLoading,
        error: catalog.error
    }),
    catalogActions
)(CatalogByPath);
