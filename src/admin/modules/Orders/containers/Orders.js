import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Orders as BaseOrders } from "../components";
import { ordersActions } from "admin/actions";

const Orders = ({
    fetchOrders,
    fetchChangeStatus,
    fetchDelete,
    items,
    isLoading,
    error
}) => {
    useEffect(() => {
        if (!items) {
            fetchOrders();
        }
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    const onChangeStatus = (id, e) => {
        fetchChangeStatus({ id, status: e });
    };

    return (
        <BaseOrders
            onChangeStatus={onChangeStatus}
            fetchDelete={fetchDelete}
            items={items}
            isLoading={isLoading}
            error={error}
        />
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
