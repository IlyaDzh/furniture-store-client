import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Spinner, Error } from "client/components";
import { FullNews } from "../components";
import { newsActions } from "client/actions";

const NewsById = ({ fetchCurrentNews, currentItem, setError, error, isLoading }) => {
    const { newsId } = useParams();

    useEffect(() => {
        if (currentItem && currentItem._id === newsId) return;
        fetchCurrentNews(newsId);
        return () => setError(false);
    }, [newsId]); // eslint-disable-line react-hooks/exhaustive-deps

    return isLoading ? (
        <Spinner />
    ) : error ? (
        <Error />
    ) : (
        currentItem && <FullNews {...currentItem} />
    );
};

export default connect(
    ({ news }) => ({
        currentItem: news.currentItem,
        error: news.error,
        isLoading: news.isLoading
    }),
    newsActions
)(NewsById);
