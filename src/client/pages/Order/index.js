import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Section, ScrollToTop, Spinner, Error } from "components";
import { Tables } from "./components";
import { ordersActions } from "actions";

const Order = ({ fetchCurrentOrder, currentItem, setError, error, isLoading }) => {
    const { orderId } = useParams();

    useEffect(() => {
        if (currentItem && currentItem._id === orderId) return;
        fetchCurrentOrder(orderId);
        return () => setError(false);
    }, [orderId]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Section className="order" title={`Заказ №${orderId}`}>
            <ScrollToTop />
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <Error />
            ) : (
                currentItem && <Tables {...currentItem} /> 
            )}
        </Section>
    );
};

export default connect(
    ({ orders }) => ({
        currentItem: orders.currentItem,
        isLoading: orders.isLoading,
        error: orders.error
    }),
    ordersActions
)(Order);
