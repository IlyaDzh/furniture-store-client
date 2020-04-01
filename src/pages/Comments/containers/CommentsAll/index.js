import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { commentsActions } from "actions";
import { Spinner, Pagination, Comment } from "components";

const CommentsAll = ({
    fetchComments,
    setCurrentPage,
    items,
    currentPage,
    totalPage,
    setError,
    error,
    isLoading
}) => {
    let history = useHistory();
    let { pageNumber } = useParams();

    useEffect(() => {
        if (pageNumber) {
            fetchComments(pageNumber);
        } else {
            fetchComments(1);
        }
        return () => setError(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);

    const changePage = page => {
        setCurrentPage(page);
        history.push("/comments/page/" + page);
    };

    return (
        <>
            <div className="row">
                {isLoading ? (
                    <Spinner />
                ) : error ? (
                    <div>Error</div>
                ) : (
                    items.length > 0 && items.map(item => <Comment key={item._id} {...item} />)
                )}
            </div>

            <Pagination total={totalPage} current={currentPage} onChange={changePage} />
        </>
    );
};

export default connect(
    ({ comments }) => ({
        items: comments.items,
        currentPage: comments.currentPage,
        totalPage: comments.totalPage,
        error: comments.error,
        isLoading: comments.isLoading
    }),
    commentsActions
)(CommentsAll);
