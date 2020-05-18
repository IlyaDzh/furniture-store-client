import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Comments as BaseComments, EditModal } from "../components";
import { commentsActions } from "admin/actions";

const Comments = ({
    fetchComments,
    fetchEdit,
    fetchDelete,
    items,
    isLoading,
    error
}) => {
    const [editData, setEditData] = useState({});
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        if (!items) {
            fetchComments();
        }
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    const openEditModal = data => {
        setEditData(data);
        setShowEdit(true);
    };

    return (
        <>
            <BaseComments
                openEditModal={openEditModal}
                fetchDelete={fetchDelete}
                items={items}
                isLoading={isLoading}
                error={error}
            />
            <EditModal
                setShow={setShowEdit}
                show={showEdit}
                fetchEdit={fetchEdit}
                data={editData}
            />
        </>
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
