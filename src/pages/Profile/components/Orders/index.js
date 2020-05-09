import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

import { getConvertTime, getConvertPrice } from "utils/helpers";
import "./Orders.scss";

const Orders = ({ orders }) => (
    <div className="profile-orders">
        <div className="profile-orders__title">Мои заказы</div>
        <div className="table-container">
            <Table borderless>
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Дата</th>
                        <th>Сумма</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(({ _id, createdAt, cart, status }) => (
                        <tr key={_id}>
                            <td>
                                <Link to={`/order/${_id}`}>{_id}</Link>
                            </td>
                            <td>{getConvertTime(createdAt)}</td>
                            <td>
                                {getConvertPrice(
                                    cart.reduce(
                                        (acc, { product, count }) =>
                                            acc + product.price.current * count,
                                        0
                                    )
                                )}{" "}
                                руб.
                            </td>
                            <td>{status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>
);

Orders.propTypes = {
    orders: PropTypes.array
};

export default Orders;
