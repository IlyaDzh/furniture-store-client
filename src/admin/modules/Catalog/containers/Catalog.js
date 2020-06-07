import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Catalog as BaseCatalog, DetailsModal } from "../components";
import { catalogActions } from "admin/actions";
import AddModal from "./AddModal";

const Catalog = ({
    fetchCatalog,
    deleteProduct,
    items,
    currentId,
    isLoading,
    error
}) => {
    const [filterType, setFilterType] = useState("living-rooms");
    const [details, setDetails] = useState({});
    const [showDetails, setShowDetails] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        fetchCatalog(filterType);
    }, [filterType]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChangeToggle = value => {
        setFilterType(value);
    };

    const openDetailsModal = data => {
        setDetails(data);
        setShowDetails(true);
    };

    const openEditModal = data => {
        setDetails(data);
        setShowEdit(true);
    };

    const onChangeStatus = (id, status) => {
        console.log("id: ", id);
        console.log("status: ", status);
    };

    return (
        <>
            <BaseCatalog
                value={filterType}
                handleChange={handleChangeToggle}
                setShowAdd={setShowAdd}
                openDetailsModal={openDetailsModal}
                openEditModal={openEditModal}
                onChangeStatus={onChangeStatus}
                deleteProduct={deleteProduct}
                items={items}
                isLoading={isLoading}
                error={error}
            />
            <DetailsModal
                setShow={setShowDetails}
                show={showDetails}
                details={details}
            />
            <AddModal setShow={setShowAdd} show={showAdd} type={currentId} />
            {/* <EditModal setShow={setShowEdit} show={showEdit} details={details} /> */}
        </>
    );
};

export default connect(
    ({ catalog }) => ({
        items: catalog.items,
        currentId: catalog.currentId,
        isLoading: catalog.isLoading,
        error: catalog.error
    }),
    catalogActions
)(Catalog);
