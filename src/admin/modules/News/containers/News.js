import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { News as BaseNews } from "../components";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import { newsActions } from "admin/actions";

const News = ({ fetchNews, deleteNews, items, isLoading, error }) => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [itemData, setItemData] = useState(false);

    useEffect(() => {
        if (!items) {
            fetchNews();
        }
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    const openEditModal = item => {
        setItemData(item);
        setShowEdit(true);
    };

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
            <EditModal setShow={setShowEdit} show={showEdit} itemData={itemData} />
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
