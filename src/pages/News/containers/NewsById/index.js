import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Spinner } from "components";
import { FullNews } from "../../components";
import { newsActions } from "actions";

const NewsById = ({ fetchCurrentNews, item, setError, error, isLoading }) => {
    let { newsId } = useParams();

    useEffect(() => {
        if (item) {
            fetchCurrentNews(newsId);
        }
        return () => setError(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newsId]);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <div>Error</div>
            ) : (
                item && <FullNews {...item} />
            )}
        </>
    );
};

export default connect(
    ({ news }) => ({
        item: news.currentItem,
        error: news.error,
        isLoading: news.isLoading
    }),
    newsActions
)(NewsById);
