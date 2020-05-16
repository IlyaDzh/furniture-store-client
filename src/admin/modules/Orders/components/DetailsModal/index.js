import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table, Modal, Button } from "react-bootstrap";

import { getConvertTime, getConvertPrice } from "utils/helpers";
import "./DetailsModal.scss";

const DetailsModal = ({ setShow, show, details }) => (
    <Modal
        className="my-modal modal-details"
        show={show}
        onHide={() => setShow(false)}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Подробнее</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {details.type === "Оформление заказа" ? (
                <Table size="sm">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Оплата:</td>
                            <td>{details.payment}</td>
                        </tr>
                        <tr>
                            <td>Доставка:</td>
                            <td>{details.delivery}</td>
                        </tr>
                        <tr>
                            <td>Корзина:</td>
                            <td>
                                {details.cart.map(({ _id, product, count }) => (
                                    <p key={_id}>
                                        <Link to={`/product/${product._id}`}>
                                            {product.name}
                                        </Link>{" "}
                                        x {count}
                                    </p>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td>Сумма заказа:</td>
                            <td>
                                {getConvertPrice(
                                    details.cart.reduce(
                                        (acc, { product, count }) =>
                                            acc + product.price.current * count,
                                        0
                                    )
                                )}{" "}
                                руб.
                            </td>
                        </tr>
                    </tbody>
                </Table>
            ) : details.type === "Вызов замерщика" ? (
                <Table size="sm">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Желательное время приезда:</td>
                            <td>{details.time}</td>
                        </tr>
                        <tr>
                            <td>Дата приезда:</td>
                            <td>{getConvertTime(details.date)}</td>
                        </tr>
                    </tbody>
                </Table>
            ) : null}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="link" size="lg" onClick={() => setShow(false)} block>
                Ок
            </Button>
        </Modal.Footer>
    </Modal>
);

DetailsModal.propTypes = {
    setShow: PropTypes.func,
    show: PropTypes.bool,
    details: PropTypes.object
};

export default DetailsModal;
