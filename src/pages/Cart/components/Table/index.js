import React from "react";
import { Link } from "react-router-dom";
import { Table as BaseTable, Form, Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";

import { getConvertPrice } from "utils/helpers";
import "./Table.scss";

const Table = ({ cart, removeItem, changeCount }) => (
    <div className="cart-table">
        <div className="table-container">
            <BaseTable borderless>
                <thead>
                    <tr>
                        <th>Товары</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length ? (
                        cart.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <Link
                                        to={`/product/${item._id}`}
                                        className="product-link"
                                    >
                                        {item.title}
                                    </Link>
                                </td>
                                <td>{getConvertPrice(item.price)} руб.</td>
                                <td>
                                    <Form.Control
                                        type="number"
                                        min={1}
                                        max={9}
                                        defaultValue={item.count}
                                        onChange={e =>
                                            changeCount(
                                                item._id,
                                                e.currentTarget.value
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    {getConvertPrice(item.price * item.count)} руб.
                                </td>
                                <td>
                                    <Button
                                        variant="red"
                                        onClick={() => removeItem(item._id)}
                                    >
                                        <MdClose />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="table__empty">
                            <td colSpan="5">Ваша корзина пуста</td>
                        </tr>
                    )}
                </tbody>
            </BaseTable>
        </div>
        {cart.length ? (
            <div className="table__result">
                Общая сумма:{" "}
                {getConvertPrice(
                    cart.reduce((acc, { price, count }) => acc + price * count, 0)
                )}{" "}
                руб.
            </div>
        ) : null}
    </div>
);

export default Table;
