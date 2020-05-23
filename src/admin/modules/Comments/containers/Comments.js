import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Comments as BaseComments } from "../components";
import { commentsActions } from "admin/actions";

const Comments = ({ fetchComments, deleteComment, items, isLoading, error }) => {
    useEffect(() => {
        if (!items) {
            fetchComments();
        }
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <BaseComments
            deleteComment={deleteComment}
            items={items}
            isLoading={isLoading}
            error={error}
        />
    );
};

export default connect(
    ({ comments }) => ({
        items: comments.items,
        isLoading: comments.isLoading,
        error: comments.error
    }),
    commentsActions
)(Comments);
