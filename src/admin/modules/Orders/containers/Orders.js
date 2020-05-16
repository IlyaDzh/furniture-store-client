import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Orders as BaseOrders, DetailsModal } from "../components";
import { ordersActions } from "admin/actions";

const Orders = ({
    fetchOrders,
    fetchChangeStatus,
    fetchDelete,
    items,
    isLoading,
    error
}) => {
    const [tempItems, setTempItems] = useState();
    const [filterType, setFilterType] = useState("");
    const [details, setDetails] = useState({});
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        if (!items) {
            fetchOrders();
        } else {
            setTempItems(
                filterType ? items.filter(item => item.type === filterType) : items
            );
        }
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChangeToggle = value => {
        setTempItems(value ? items.filter(item => item.type === value) : items);
        setFilterType(value);
    };

    const onChangeStatus = (id, status) => {
        fetchChangeStatus({ id, status });
    };

    const openDetailsModal = data => {
        setDetails(data);
        setShowDetails(true);
    };

    return (
        <>
            <BaseOrders
                value={filterType}
                handleChange={handleChangeToggle}
                onChangeStatus={onChangeStatus}
                openDetailsModal={openDetailsModal}
                fetchDelete={fetchDelete}
                items={tempItems}
                isLoading={isLoading}
                error={error}
            />
            <DetailsModal
                setShow={setShowDetails}
                show={showDetails}
                details={details}
            />
        </>
    );
};

export default connect(
    ({ orders }) => ({
        items: orders.items,
        isLoading: orders.isLoading,
        error: orders.error
    }),
    ordersActions
)(Orders);
