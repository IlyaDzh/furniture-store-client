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
                        cart.map(({ count, product }) => (
                            <tr key={product._id}>
                                <td>
                                    <Link
                                        to={`/product/${product._id}`}
                                        className="product-link"
                                    >
                                        {product.name}
                                    </Link>
                                </td>
                                <td>{getConvertPrice(product.price)} руб.</td>
                                <td>
                                    <Form.Control
                                        type="number"
                                        min={1}
                                        max={9}
                                        defaultValue={count}
                                        onChange={e =>
                                            changeCount(
                                                product._id,
                                                e.currentTarget.value
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    {getConvertPrice(product.price * count)} руб.
                                </td>
                                <td>
                                    <Button
                                        variant="red"
                                        onClick={() => removeItem(product._id)}
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
                    cart.reduce(
                        (acc, { product, count }) => acc + product.price * count,
                        0
                    )
                )}{" "}
                руб.
            </div>
        ) : null}
    </div>
);

export default Table;
