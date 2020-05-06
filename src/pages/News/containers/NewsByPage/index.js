import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { newsActions } from "actions";
import { Spinner, Pagination, CardNews, Error } from "components";

const NewsByPage = ({
    fetchNews,
    setCurrentPage,
    items,
    currentPage,
    totalPage,
    setError,
    error,
    isLoading
}) => {
    const history = useHistory();
    const { pageNumber } = useParams();

    useEffect(() => {
        if (!pageNumber && items.length && currentPage === 1) {
            return;
        }

        if (pageNumber) {
            fetchNews(pageNumber);
        } else {
            fetchNews(1);
        }

        return () => setError(false);
    }, [pageNumber]); // eslint-disable-line react-hooks/exhaustive-deps

    const changePage = page => {
        setCurrentPage(page);
        history.push("/news/page/" + page);
    };

    return (
        <>
            <div className="row">
                {isLoading ? (
                    <Spinner />
                ) : error ? (
                    <Error />
                ) : (
                    items.length > 0 &&
                    items.map(item => <CardNews key={item._id} {...item} />)
                )}
            </div>

            {!error && (
                <Pagination
                    total={totalPage}
                    current={currentPage}
                    onChange={changePage}
                />
            )}
        </>
    );
};

export default connect(
    ({ news }) => ({
        items: news.items,
        currentPage: news.currentPage,
        totalPage: news.totalPage,
        error: news.error,
        isLoading: news.isLoading
    }),
    newsActions
)(NewsByPage);
