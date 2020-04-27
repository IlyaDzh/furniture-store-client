import React from "react";
import { Link } from "react-router-dom";
import { Table as BaseTable, Form, Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";

import { getConvertPrice } from "utils/helpers";
import "./Table.scss";

const cart = [
    {
        _id: "h2fdsf312a",
        title: "Малая гостиная Матильда",
        price: 216740,
        count: 1
    },
    {
        _id: "94gf8ads32",
        title: "Стул металлический Zero (изумруд)",
        price: 4040,
        count: 3
    },
    {
        _id: "6qldf932n1",
        title: "Спальня Натали с 6-дверным шкафом (белый глянец)",
        price: 108723,
        count: 1
    }
];

const Table = () => {
    return (
        <div className="cart-table">
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
                    {cart.map(item => (
                        <tr key={item._id}>
                            <td>
                                <Link to={`/product/${item._id}`}>{item.title}</Link>
                            </td>
                            <td>{getConvertPrice(item.price)} руб.</td>
                            <td>
                                <Form.Control
                                    type="number"
                                    min={1}
                                    max={9}
                                    defaultValue={item.count}
                                />
                            </td>
                            <td>{getConvertPrice(item.price * item.count)} руб.</td>
                            <td>
                                <Button variant="red">
                                    <MdClose />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </BaseTable>
            <div className="table__result">
                Общая сумма:{" "}
                {getConvertPrice(
                    cart.reduce((acc, { price, count }) => acc + price * count, 0)
                )}{" "}
                руб.
            </div>
        </div>
    );
};

export default Table;
