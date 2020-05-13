import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { commentsActions } from "client/actions";
import { Section, Spinner, Pagination, Comment, Error } from "client/components";

const Comments = ({
    fetchComments,
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
            fetchComments(pageNumber);
        } else {
            fetchComments(1);
        }

        return () => setError(false);
    }, [pageNumber]); // eslint-disable-line react-hooks/exhaustive-deps

    const changePage = page => {
        setCurrentPage(page);
        history.push("/comments/page/" + page);
    };

    return (
        <Section className="comments" title="Отзывы наших клиентов">
            <div className="row">
                {isLoading ? (
                    <Spinner />
                ) : error ? (
                    <Error />
                ) : (
                    items.length > 0 &&
                    items.map(item => <Comment key={item._id} {...item} />)
                )}
            </div>
            {!error && (
                <Pagination
                    total={totalPage}
                    current={currentPage}
                    onChange={changePage}
                />
            )}
        </Section>
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
)(Comments);
