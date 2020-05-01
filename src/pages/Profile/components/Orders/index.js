import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

import { getConvertPrice } from "utils/helpers";
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
                    {orders.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.date}</td>
                            <td>{getConvertPrice(item.total)} руб.</td>
                            <td>{item.status}</td>
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
