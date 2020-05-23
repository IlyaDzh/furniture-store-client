import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { News as BaseNews } from "../components";
import AddModal from "./AddModal";
import { newsActions } from "admin/actions";

const News = ({ fetchNews, deleteNews, items, isLoading, error }) => {
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        if (!items) {
            fetchNews();
        }
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    const openEditModal = data => {};

    return (
        <>
            <BaseNews
                setShowAdd={setShowAdd}
                openEditModal={openEditModal}
                deleteNews={deleteNews}
                items={items}
                isLoading={isLoading}
                error={error}
            />
            <AddModal setShow={setShowAdd} show={showAdd} />
        </>
    );
};

export default connect(
    ({ news }) => ({
        items: news.items,
        isLoading: news.isLoading,
        error: news.error
    }),
    newsActions
)(News);
