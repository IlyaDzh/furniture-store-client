import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

import { getConvertTime, getConvertPrice } from "utils/helpers";
import "./Tables.scss";

const Tables = ({
    status,
    cart,
    delivery,
    payment,
    fullname,
    phone,
    address,
    comment,
    createdAt
}) => (
    <div className="order__content">
        <div className="order-info">
            <h4 className="order__title">Информация о заказе</h4>
            <Table borderless>
                <tbody>
                    <tr>
                        <td>Статус</td>
                        <td>{status}</td>
                    </tr>
                    <tr>
                        <td>Сумма заказа</td>
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
                    </tr>
                    <tr>
                        <td>Способ доставки</td>
                        <td>{delivery}</td>
                    </tr>
                    <tr>
                        <td>Способ оплаты</td>
                        <td>{payment}</td>
                    </tr>
                    <tr>
                        <td>Имя заказчика</td>
                        <td>{fullname}</td>
                    </tr>
                    <tr>
                        <td>Телефон заказчика</td>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <td>Адрес доставки</td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td>Комментарий к заказу</td>
                        <td>{comment || "---"}</td>
                    </tr>
                    <tr>
                        <td>Дата создания заказа</td>
                        <td>{getConvertTime(createdAt)}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div className="order-products">
            <h4 className="order__title">Содержимое заказа</h4>
            <div className="table-container">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(({ count, product }) => (
                            <tr key={product._id}>
                                <td>
                                    <Link
                                        to={`/product/${product._id}`}
                                        className="product-link"
                                    >
                                        {product.name}
                                    </Link>
                                </td>
                                <td>
                                    {getConvertPrice(product.price.current)} руб.
                                </td>
                                <td>{count}</td>
                                <td>
                                    {getConvertPrice(product.price.current * count)}{" "}
                                    руб.
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
);

Tables.propTypes = {
    status: PropTypes.string,
    cart: PropTypes.arrayOf(Object),
    delivery: PropTypes.string,
    payment: PropTypes.string,
    fullname: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    comment: PropTypes.string,
    createdAt: PropTypes.string
};

export default Tables;
