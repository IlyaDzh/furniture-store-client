import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Statistics as BaseStatistics } from "../components";
import { statisticsActions } from "admin/actions";

const Statistics = ({
    fetchCountUsers,
    fetchCountOrders,
    fetchCountComments,
    users,
    orders,
    comments
}) => {
    useEffect(() => {
        if (!users) {
            fetchCountUsers();
        }
    }, [users]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!orders) {
            fetchCountOrders(); 
        }
    }, [orders]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!comments) {
            fetchCountComments(); 
        }
    }, [comments]); // eslint-disable-line react-hooks/exhaustive-deps

    return <BaseStatistics users={users} orders={orders} comments={comments} />;
};

export default connect(
    ({ statistics }) => ({
        users: statistics.users,
        orders: statistics.orders,
        comments: statistics.comments
    }),
    statisticsActions
)(Statistics);
